import { useAppDispatch } from "../../../service/store";
import { Container, TextInput, Button, Text, Paper, PasswordInput, Title, Notification } from "@mantine/core";
import { Link } from "react-router-dom";
import { postUserRegistration } from "../../../storeServer/register";
import "./Register.css";
import { useState } from "react";

function AuthenticationTitle() {
    const dispatch = useAppDispatch();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        password2: "",
        first_name: "",
        last_name: "",
    });
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        setSuccess(false);
        setError("");

        try {
            await dispatch(postUserRegistration(formData)).unwrap();
            setSuccess(true);
        } catch (err: any) {
            const errorMessage = err?.message || "Something went wrong.";
            setError(errorMessage);
            console.error("Error:", err);
        }
    };

    return (
        <Container size={420} my={40}>
            <Title ta="center">Welcome!</Title>
            <Text c="dimmed" size="sm" ta="center" mt={5}>
                Do you have an account?{" "}
                <Link to="/login" style={{ fontSize: '14px' }}>
                    Log in
                </Link>
            </Text>

            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                {success && <Notification color="green">Success!</Notification>}
                {error && <Notification color="red">{error}</Notification>}

                <TextInput
                    label="Username"
                    name="username"
                    placeholder="User Name"
                    required
                    mt="md"
                    onChange={handleChange}
                />

                <PasswordInput
                    label="Password"
                    name="password"
                    placeholder="Your password"
                    required
                    mt="md"
                    onChange={handleChange}
                />

                <PasswordInput
                    label="Password"
                    name="password2"
                    placeholder="Again password"
                    required
                    mt="md"
                    onChange={handleChange}
                />

                <TextInput
                    label="Name"
                    name="first_name"
                    placeholder="Name"
                    required
                    mt="md"
                    onChange={handleChange}
                />
                <TextInput
                    label="Surname"
                    name="last_name"
                    placeholder="Surname"
                    required
                    mt="md"
                    onChange={handleChange}
                />

                <Button
                    fullWidth
                    mt="xl"
                    onClick={handleSubmit}
                    // loading={isLoading}
                >
                    Sign in
                </Button>
            </Paper>
        </Container>
    );
}

export default AuthenticationTitle;
