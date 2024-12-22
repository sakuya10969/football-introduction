"use client";

import React from "react";
import { TextField, Button, Typography } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { UserCredential } from "firebase/auth";
import Link from "next/link";

type handleSignIn = {
  onSignIn: (email: string, password: string) => Promise<UserCredential>;
}

type FormInputs = {
  email: string;
  password: string;
}

const SignInForm: React.FC<handleSignIn> = ({ onSignIn }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const handleFormSubmit: SubmitHandler<FormInputs> = async ({ email, password }) => {
      await onSignIn(email, password);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Typography variant="h5">Sign In</Typography>
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        {...register("email", {
          required: "入力必須です",
          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "有効なメールアドレスを入力してください" }
        })}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        {...register("password", {
          required: "入力必須です",
          minLength: {
            value: 6,
            message: "6文字以上で入力してください"
          }
        })}
        error={!!errors.password}
        helperText={errors.password?.message}
        sx={{ mb: 2 }}
      />
      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{ backgroundColor: "black", color: "white", textTransform: "none", fontSize: "1.1rem" }}>
        Sign In
      </Button>
      <Typography sx={{ textAlign: "center", mt: 2 }}>
        登録がまだの方は{" "}
        <Link href="/signup" style={{
          color: "blue",
          textDecoration: "underline"
        }}>
          こちらへ
        </Link>
      </Typography>
    </form>
  );
};

export default SignInForm;
