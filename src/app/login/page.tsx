"use client";
import MainLogo from "@/components/svg/main-logo";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
});

function Home() {
  const [signup, setSignup] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSignup(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  function onLogin(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex flex-col justify-center items-center gap-8 pointer-events-auto h-screen">
      <MainLogo height={80} width={160} />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(signup ? onSignup : onLogin)}
          className="space-y-6 border border-primary rounded-md p-4 pointer-events-auto"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="text-lg">Username</FormLabel>
                  <FormControl>
                    <Input placeholder="username" {...field} />
                  </FormControl>
                  <FormDescription>This is your public display name</FormDescription>
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="text-lg">Password</FormLabel>
                  <FormControl>
                    <Input size={30} placeholder="password" {...field} />
                  </FormControl>
                </FormItem>
              );
            }}
          />
          <div className="flex flex-row justify-around">
            <Button type="submit" className="cursor-pointer">
              {signup ? "signup" : "login"}
            </Button>
            <Button
              type="submit"
              variant="ghost"
              className="cursor-pointer"
              onClick={() => {
                setSignup((prev) => !prev);
              }}
            >
              {signup ? "Go to login" : "Go to signup"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default Home;
