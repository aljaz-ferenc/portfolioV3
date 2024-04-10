import React from "react";
import { Amarante, Bodoni_Moda } from "next/font/google";

const amarante = Amarante({ subsets: ["latin"], weight: ["400"] });
const bodoni = Bodoni_Moda({ subsets: ["latin"], weight: ['400']});

type HighlighterProps = {
  children: React.ReactNode;
};

export default function Highlighter ({ children }: HighlighterProps){
  return <div className='text-xl'>{children}</div>;
};

Highlighter.H1 = ({ children }: HighlighterProps) => {
return (
    <div className={`text-4xl sm:text-5xl md:text-7xl mb-16`}>
<Code>{`<h1>`}</Code>
<code className={`inline text-white ${amarante.className}`}>{children}</code>
<Code>{`</h1>`}</Code>
    </div>
)
    
};

Highlighter.H2 = ({ children }: HighlighterProps) => {
    return (
        <div className='text-2xl sm:text-3xl md:text-5xl mb-10'>
    <Code>{`<h2>`}</Code>
    <code className={`inline text-white ${amarante.className}`}>{children}</code>
    <Code>{`</h2>`}</Code>
        </div>
    )
        
    };

Highlighter.P = ({ children }: HighlighterProps) => {
    return (
        <div className='text-lg mb-5'>
    <Code >{`<p>`}</Code>
    <code className={`inline text-white ${bodoni.className}`}>{children}</code>
    <Code>{`</p>`}</Code>
        </div>
    )
};

function Code({children}: HighlighterProps){
    return (
        <code className={`inline text-gray-800 ${amarante.className}`}>{children}</code>
    )
}