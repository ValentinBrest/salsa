import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import emailjs from '@emailjs/browser';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    AppLink,
    AppLinkTheme,
    Button,
    ButtonSize,
    ButtonTheme,
} from 'shared/ui';
import { Text, TextTheme } from 'shared/ui/Text/Text';

import dance from '../../../../../public/img/dance.jpg';
import Instagram from '../../../../shared/assets/icons/social/instagram.svg';

import cl from './Form.module.scss';

interface FormProps {
    className?: string;
    backgroundColor?: string;
}

type Inputs = {
    user_name: string;
    last_name: string;
    age: string;
    phone: string;
};

export const Form = ({ className, backgroundColor }: FormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
        control,
    } = useForm<Inputs>({
        mode: 'onChange',
    });

    console.log({ ...register });
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        // emailjs.sendForm('service_03ra7oq', 'template_vpdvwkf', form.current, 'sl7eRfWDYJKP2nyqV')
        //     .then((result) => {
        //         console.log('Данные отправлены успешно');
        //     }, (error) => {
        //         console.log('Ошибка');
        //     });
        reset();
    };
    const Background = {
        background: `center / cover no-repeat url(${dance})`,
    };

    console.log(isValid, errors)

    return (
        <div
            style={{ background: backgroundColor }}
            id='form'
            className={classNames(cl.Form, {}, [className])}
        >
            <div className='container'>
                <div className={cl.wrap}>
                    <div>
                        <Text
                            theme={TextTheme.WITHOUT}
                            title='ЗАПИШИТЕСЬ НА ПЕРВЫЙ УРОК'
                        />
                        <div className={cl.send}>
                            <Text
                                className={cl.withoutMargin}
                                text={'Для этого отправьте сообщение '}
                            />
                            <div className={cl.wantToDance}>
                                <span>"Хочу танцевать сальсу"</span>
                            </div>
                            <Text
                                className={cl.withoutMargin}
                                text={' в директ нашей страницы в '}
                            />
                            <a href='https://www.instagram.com/salsabrest/'>
                                <Instagram className={cl.insta} />
                            </a>
                            <Text text={'или заполни форму ниже'} />
                            <form
                                className={cl.form}
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <div className={cl.formInner}>
                                    <div className={cl.inputWrap}>
                                        <input
                                            autoComplete='off'
                                            className={classNames(
                                                cl.Input,
                                                {},
                                                [className]
                                            )}
                                            placeholder='Имя'
                                            {...register('user_name', {
                                                required:
                                                    'Поле обязательно к заполнению',
                                                pattern: {
                                                    value: /[А-яЁё]/,
                                                    message: 'только кириллица',
                                                },
                                                maxLength: {
                                                    value: 15,
                                                    message: 'максимум 15 букв',
                                                },
                                                minLength: {
                                                    value: 2,
                                                    message: 'минимум 2 буквы',
                                                },
                                            })}
                                        />
                                        {errors?.user_name && (
                                            <Text
                                                theme={TextTheme.ERROR}
                                                text={
                                                    errors?.user_name?.message
                                                }
                                            />
                                        )}
                                    </div>

                                    <div className={cl.inputWrap}>
                                        <input
                                        autoComplete='off'
                                            className={classNames(
                                                cl.Input,
                                                {},
                                                [className]
                                            )}
                                            placeholder='Фамилия'
                                            {...register('last_name', {
                                                required:
                                                    'Поле обязательно к заполнению',
                                                pattern: {
                                                    value: /[А-яЁё]/,
                                                    message: 'только кириллица',
                                                },
                                                maxLength: {
                                                    value: 15,
                                                    message: 'максимум 15 букв',
                                                },
                                                minLength: {
                                                    value: 2,
                                                    message: 'минимум 2 буквы',
                                                },
                                            })}
                                        />
                                        {errors?.last_name && (
                                            <Text
                                                theme={TextTheme.ERROR}
                                                text={
                                                    errors?.last_name?.message
                                                }
                                            />
                                        )}
                                    </div>

                                    <div className={cl.inputWrap}>
                                        <input
                                        autoComplete='off'
                                            type='number'
                                            className={classNames(
                                                cl.Input,
                                                {},
                                                [className]
                                            )}
                                            placeholder='Возраст'
                                            {...register('age', {
                                                required:
                                                    'Поле обязательно к заполнению',
                                                min: 18,
                                                max: 45,
                                            })}
                                        />
                                        {errors?.age?.type == 'min' && (
                                            <Text
                                                theme={TextTheme.ERROR}
                                                text={
                                                    'Минимальный возраст 18 лет'
                                                }
                                            />
                                        )}
                                        {errors?.age?.type == 'max' && (
                                            <Text
                                                theme={TextTheme.ERROR}
                                                text={
                                                    'Максимальный возраст 45 лет'
                                                }
                                            />
                                        )}
                                        {errors?.age && (
                                            <Text
                                                theme={TextTheme.ERROR}
                                                text={errors?.age?.message}
                                            />
                                        )}
                                    </div>

                                    <div className={cl.inputWrap}>
                                        <InputMask
                                        autoComplete='off'
                                            className={classNames(
                                                cl.Input,
                                                {},
                                                [className]
                                            )}
                                            placeholder='Телефон'
                                            mask='+375 (99) 999-99-99'
                                            {...register('phone', {
                                                required:
                                                    'Поле обязательно к заполнению',
                                                pattern: {
                                                    value: /^(\+375) \((29|25|44|33)\) (\d{3})\-(\d{2})\-(\d{2})$/gm,
                                                    message: 'некорректный номер',
                                                },    
                                            })}
                                        />
                                        {errors?.phone && (
                                            <Text
                                                theme={TextTheme.ERROR}
                                                text={errors?.phone?.message}
                                            />
                                        )}
                                    </div>
                                </div>

                                <Button
                                    disabled={!isValid}
                                    theme={ButtonTheme.OUTLINE}
                                    size={ButtonSize.L}
                                    className={cl.button}
                                    type='submit'
                                >
                                    Отправить
                                </Button>
                                <span className={cl.text}>
                                    {
                                        '*Нажимая на кнопку "Отправить", вы даете согласие на обработку персональных данных и соглашаетесь '
                                    }
                                    {
                                        <AppLink
                                            className={cl.politics}
                                            to={''}
                                        >
                                            c политикой конфиденциальности
                                        </AppLink>
                                    }
                                    .
                                </span>
                            </form>
                        </div>
                    </div>

                    <div style={Background} className={cl.formImg} />
                </div>
            </div>
        </div>
    );
};
