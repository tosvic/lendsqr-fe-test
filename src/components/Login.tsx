"use client";

import { Button, Label, TextInput } from "flowbite-react";
import logo from '/src/assets/logo.svg';
import sidepix from '/src/assets/login-image.svg';

const Login = () => {
  return (
    <div>
        <div>
              <img src={logo} alt="logo" />
        </div>

        <div className='w-full h-full flex fl items-center justify-center gap-20'>
            
            <div className=''>
                  <img src={sidepix} alt="" className='w-[500px]' />
            </div>

            <div className='w-full'>
                <h1>Welcome!</h1>
                <p>Enter details to login.</p>
                  <form className="flex w-full max-w-md flex-col gap-4">
                      <div> 
                          <TextInput id="mail" type="email" placeholder="Email" required />
                      </div>
                      <div>
                          <TextInput id="pass" type="password" placeholder='Password' required />
                      </div>
                      <div className="flex items-center gap-2">
                          <Label htmlFor="forgot">Forgot password</Label>
                      </div>
                      <Button type="submit">LOG IN</Button>
                  </form>
            </div>
        </div>

    </div>
  )
}

export default Login