// is-unique.decorator.ts
import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import { getRepository } from 'typeorm';

export function IsUnique(entity: any, validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'isUnique',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    const [relatedPropertyName] = args.constraints;
                    const repository = getRepository(entity);
                    return repository.findOne({ [relatedPropertyName]: value }).then((relatedValue) => {
                        return !relatedValue;
                    });
                },
            },
        });
    };
}
