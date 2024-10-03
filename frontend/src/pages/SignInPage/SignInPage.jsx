import React from 'react'
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from '@clerk/clerk-react';

function SignInPage() {
    return (
        <div>
            <div>
                <h2>Please sign in to access the Trip page</h2>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    )
}

export default SignInPage
