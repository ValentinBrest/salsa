import { MutableRefObject, useCallback, useRef, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import emailjs from '@emailjs/browser';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hook/useInfiniteScroll/useInfiniteScroll';
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

import { FormModal } from './FormModal';

import cl from './Form.module.scss';

interface FormProps {
    className?: string;
    backgroundColor?: string;
}

type Inputs = {
    user_name: string;
    last_name: string;
    birth: string;
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
    const [isAuthModal, setIsAuthModal] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const form = useRef();
    const [totalSend, setTotalSend] = useState({visible: false, result: ''});
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
        setIsMounted(false);
    }, []);

    const onOpenModal = useCallback((e) => {
        setIsAuthModal(true);
        setIsMounted(true);
    }, []);

    useInfiniteScroll({
        triggerRef,
        callback: () => setIsVisible(true),
        threshold: 0.05,
    });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        emailjs.sendForm('service_03ra7oq', 'template_vpdvwkf', form.current, 'sl7eRfWDYJKP2nyqV')
            .then((result) => {
                setTotalSend({visible: true, result: 'Данные успешно отправлены'})
                console.log('Данные отправлены успешно');
            }, (error) => {
                console.log('Ошибка');
            });
        reset();
    };
    const Background = {
        background: `center / cover no-repeat url(${dance})`,
    };

    return (
        <div
            style={{ background: backgroundColor }}
            id="form"
            className={classNames(cl.Form, {}, [className])}
            ref={triggerRef}
        >
            <div className="container">
                <div className={classNames(cl.wrap, {[cl.active]: isVisible}, [])}>
                    <div>
                        <Text
                            theme={TextTheme.WITHOUT}
                            title="ЗАПИШИТЕСЬ НА ПЕРВЫЙ УРОК"
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
                            <a href="https://www.instagram.com/salsabrest/">
                                <Instagram className={cl.insta} />
                            </a>
                            <Text text={'или заполните форму ниже'} />
                            <form
                                ref={form}
                                className={cl.form}
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <div className={cl.formInner}>

                                    <div id={cl.fio} className={cl.inputWrap}>
                                        <input
                                            autoComplete="off"
                                            className={classNames(
                                                cl.Input,
                                                {},
                                                [className],
                                            )}
                                            placeholder="Фамилия и имя"
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
                                        <InputMask
                                            autoComplete="off"
                                            className={classNames(
                                                cl.Input,
                                                {},
                                                [className],
                                            )}
                                            placeholder="Дата рождения"
                                            mask="99.99.9999"
                                            {...register('birth', {
                                                required:
                                                    'Поле обязательно к заполнению',
                                                pattern: {
                                                    value: /(0[0-9]|[12][0-9]|3[01]).(0?[1-9]|1[012]).((19|20)\d\d)/,
                                                    message: 'некорректная дата рождения',
                                                },    
                                            })}
                                        />
                                        {errors?.birth && (
                                            <Text
                                                theme={TextTheme.ERROR}
                                                text={errors?.birth?.message}
                                            />
                                        )}
                                    
                                    </div>

                                    <div className={cl.inputWrap}>
                                        <InputMask
                                            autoComplete="off"
                                            className={classNames(
                                                cl.Input,
                                                {},
                                                [className],
                                            )}
                                            placeholder="Номер телефона"
                                            mask="+375 (99) 999-99-99"
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

                                <Text className={cl.result}></Text>

                                <Button
                                    disabled={!isValid}
                                    theme={ButtonTheme.OUTLINE}
                                    size={ButtonSize.L}
                                    className={cl.button}
                                    type="submit"
                                >
                                    Отправить
                                </Button>
                                <span className={cl.text}>
                                    {
                                        '*Нажимая на кнопку "Отправить", вы даете согласие на обработку персональных данных и соглашаетесь '
                                    }
                                    {
                                        <div
                                            className={cl.politics}
                                            onClick={(e) => onOpenModal(e)}
                                        >
                                            c политикой конфиденциальности
                                        </div>
                                    }
                                    .
                                </span>
                            </form>
                            <FormModal
                                isMounted={isMounted}
                                isOpen={isAuthModal}
                                onClose={onCloseModal}
                                className={cl.modal}
                            />
                        </div>
                    </div>

                    <div style={Background} className={cl.formImg} />
                </div>
            </div>
        </div>
    );
};
