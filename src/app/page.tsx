"use client";

import {useRouter} from "next/navigation";
import {useEffect} from "react";

export default function Home() {
    // redirect to login page
    const router = useRouter();
    useEffect(() => {
        router.push('/status');
    }, []);
}

