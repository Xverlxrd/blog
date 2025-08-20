import { Input, Button, Form, Card, Divider } from "antd";
import {UserOutlined, LockOutlined, EyeTwoTone, EyeInvisibleOutlined} from '@ant-design/icons';

const Login = () => {
    return (
        <div className='w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4'>
            <Card
                className='w-full max-w-md shadow-xl rounded-2xl border-none'
                bodyStyle={{ padding: '32px' }}
            >
                <div className='text-center mb-8'>
                    <h1 className='text-3xl font-bold text-gray-800 mb-2'>Добро пожаловать</h1>
                    <p className='text-gray-600'>Введите свои данные для входа</p>
                </div>

                <Form
                    name="login"
                    layout="vertical"
                    size="large"
                >
                    <Form.Item
                        label="Email или логин"
                        name="username"
                        rules={[{ required: true, message: 'Пожалуйста, введите ваш email или логин' }]}
                    >
                        <Input
                            prefix={<UserOutlined className="text-gray-400" />}
                            placeholder="Введите email или логин"
                            className='rounded-lg h-12'
                        />
                    </Form.Item>

                    <Form.Item
                        label="Пароль"
                        name="password"
                        rules={[{ required: true, message: 'Пожалуйста, введите ваш пароль' }]}
                        className='mb-1'
                    >
                        <Input.Password
                            prefix={<LockOutlined className="text-gray-400" />}
                            placeholder="Введите пароль"
                            className='rounded-lg h-12'
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                    </Form.Item>

                    <div className='text-right mb-6'>
                        <Button type="link" className='p-0 text-sm text-blue-600 hover:text-blue-800'>
                            Забыли пароль?
                        </Button>
                    </div>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className='w-full h-12 rounded-lg text-base font-semibold bg-blue-600 hover:bg-blue-700 border-none'
                        >
                            Войти
                        </Button>
                    </Form.Item>
                </Form>

                <Divider className='text-gray-400 text-xs'>или</Divider>

                <div className='text-center'>
                    <p className='text-gray-600'>
                        Нет аккаунта?{' '}
                        <Button type="link" className='p-0 text-blue-600 hover:text-blue-800'>
                            Зарегистрироваться
                        </Button>
                    </p>
                </div>
            </Card>
        </div>
    );
};

export default Login;