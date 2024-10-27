import { cn } from "@/lib/utils";
import { Container } from "./container";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight, ShoppingCart, User } from "lucide-react";

interface Props{
    classname?: string;
}

export const Header: React.FC<Props> = ({ classname }) => {
    return(
        <header className={cn('border border-b')}>
            <Container className="flex items-center justify-between py-12">
            {/* Levo */}    
            <div className="flex items-center gap-4"> 
                <Image src={"/logo.png"} alt="Logo" width={35} height={35}></Image>
                <div>
                    <h1 className="text-2xl uppercase font">HealthMap</h1>
                    <p className="text-sm text-gray-400 leading-3">Всегда на стреме</p>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <Button variant="outline" className="flex items-center gap-1">
                    <User size={16} />   
                    Войти</Button>

                    <div>
                        <Button className="group relative">
                        <b>24$</b>
                        <span className="h-full w-[1px] bg-white/30 mx-3" />
                        <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                             <ShoppingCart size={16} className="h-4 w-4 relative" strokeWidth={2} />
                             <b>1</b>
                             
                        </div> 
                            <ArrowRight size={20} className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
                        </Button>
                    </div>
            </div>

            </Container>
        </header>
    );
};