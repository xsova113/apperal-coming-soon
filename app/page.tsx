"use client";

import Image from "next/image";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import { IoIosArrowForward } from "react-icons/io";
import { MdError } from "react-icons/md";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    toast.success(data.email);
  };

  return (
    <>
      <Toaster />
      <div className="flex">
        <Image
          src="/images/bg-pattern-desktop.svg"
          alt="bg"
          width={900}
          height={800}
          className="hidden sm:block sm:absolute sm:inset-0 object-cover sm:object-cover h-screen w-screen"
        />

        <div className="flex z-50">
          <div className="relative">
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={200}
              height={100}
              className="mx-10 my-8 sm:m-auto sm:absolute left-[110px] top-[100px] sm:h-[px] sm:w-[200px] h-auto w-auto"
            />

            {/* BELOW LOGO  */}

            <div className="flex sm:flex-row flex-col-reverse">
              <div className="flex sm:p-28 sm:mx-0 sm:mt-0 mb-14 mx-10 -mt-[400px] sm:text-start text-center">
                <div className="flex gap-20">
                  <div className="flex-col">
                    <section className="mt-32">
                      <h1 className="text-[50px] font-bold leading-[55px] tracking-[20px] text-[#413A3A]">
                        <span className="text-[#CE9797] font-light">WE&apos;RE</span>
                        <br />
                        COMING
                        <br />
                        SOON
                      </h1>
                    </section>
                    <p className="mt-8 text-[16px] text-[#CE9797] leading-8 font-normal">
                      Hello fellow shoppers! We&apos;re currently building our new
                      fashion store. Add your email below to stay up-to-date
                      with announcements and our launch deals. Email Address
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="flex items-baseline">
                        <input
                          {...register("email", {
                            required: "Please enter your email",
                            pattern: {
                              value:
                                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                              message: "Please provide a valid email",
                            },
                          })}
                          id="email"
                          type="email"
                          className="formInput"
                          placeholder="Email Address"
                        />
                        {errors.email && (
                          <MdError
                            size={30}
                            className="relative top-3 right-[135px] text-red-500 -mr-20"
                          />
                        )}
                        <button type="submit" className="formButton">
                          <IoIosArrowForward
                            size={30}
                            className="text-white mx-auto"
                          />
                        </button>
                      </div>
                      <div className="pl-8 pt-2 text-red-400">
                        {errors.email && (
                          <span>{errors.email.message?.toString()}</span>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="w-screen h-screen sm:w-full sm:h-screen z-50">
                <Image
                  src="/images/hero-desktop.jpg"
                  alt="banner"
                  width={1000}
                  height={1000}
                  className="object-cover sm:h-full h-[450px] z-50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
