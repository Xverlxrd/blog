import { Input, Button, Form, Card, Divider } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';

const Register = () => {
    return (
        <div className='w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-purple-50 to-blue-100 p-4'>
            <Card
                className='w-full max-w-md shadow-xl rounded-2xl border-none'
                bodyStyle={{ padding: '32px' }}
            >
                <div className='text-center mb-8'>
                    <h1 className='text-3xl font-bold text-gray-800 mb-2'>Создать аккаунт</h1>
                    <p className='text-gray-600'>Заполните данные для регистрации</p>
                </div>

                <Form
                    name="register"
                    layout="vertical"
                    size="large"
                >
                    <Form.Item
                        label="Никнейм"
                        name="username"
                        rules={[{ required: true, message: 'Введите ваш никнейм' }]}
                        className='mb-4'
                    >
                        <Input
                            prefix={<UserOutlined className="text-gray-400" />}
                            placeholder="Придумайте никнейм"
                            className='rounded-lg h-12'
                        />
                    </Form.Item>

                    <div className='grid grid-cols-2 gap-4 mb-4'>
                        <Form.Item
                            label="Имя"
                            name="firstName"
                        >
                            <Input
                                placeholder="Имя (необязательно)"
                                className='rounded-lg h-12'
                            />
                        </Form.Item>

                        <Form.Item
                            label="Фамилия"
                            name="lastName"
                        >
                            <Input
                                placeholder="Фамилия (необязательно)"
                                className='rounded-lg h-12'
                            />
                        </Form.Item>
                    </div>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            { required: true, message: 'Введите ваш email' },
                            { type: 'email', message: 'Некорректный email' }
                        ]}
                        className='mb-4'
                    >
                        <Input
                            prefix={<MailOutlined className="text-gray-400" />}
                            placeholder="example@mail.com"
                            className='rounded-lg h-12'
                        />
                    </Form.Item>

                    <Form.Item
                        label="Пароль"
                        name="password"
                        rules={[
                            { required: true, message: 'Введите пароль' },
                            { min: 6, message: 'Пароль должен быть не менее 6 символов' }
                        ]}
                        className='mb-1'
                    >
                        <Input.Password
                            prefix={<LockOutlined className="text-gray-400" />}
                            placeholder="Не менее 6 символов"
                            className='rounded-lg h-12'
                        />
                    </Form.Item>

                    <Form.Item
                        label="Подтверждение пароля"
                        name="confirmPassword"
                        dependencies={['password']}
                        rules={[
                            { required: true, message: 'Подтвердите пароль' },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Пароли не совпадают'));
                                },
                            }),
                        ]}
                        className='mb-6'
                    >
                        <Input.Password
                            prefix={<LockOutlined className="text-gray-400" />}
                            placeholder="Повторите пароль"
                            className='rounded-lg h-12'
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className='w-full h-12 rounded-lg text-base font-semibold bg-purple-600 hover:bg-purple-700 border-none'
                        >
                            Зарегистрироваться
                        </Button>
                    </Form.Item>
                </Form>

                <Divider className='text-gray-400 text-xs'>или</Divider>

                <div className='text-center'>
                    <p className='text-gray-600'>
                        Уже есть аккаунт?{' '}
                        <Button type="link" className='p-0 text-purple-600 hover:text-purple-800'>
                            Войти
                        </Button>
                    </p>
                </div>
            </Card>
        </div>
    );
};

export default Register;