import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

// A card component cocomponent that takes a title, description, content, and footer as props and renders them in a card layout. The footer is optional. The className prop is also optional and can be used to add custom styles to the card. The content prop can be any React node, such as text, images

type CardCompactProps = {
    title: string,
    description: string,
    content: React.ReactNode,
    footer?: React.ReactNode,
    className?: string,
}

const CardCompact = ({ title, description, content, footer, className }: CardCompactProps) => {
    return (
        <Card className={className}>
        <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
            {content}
        </CardContent>
        { footer && <CardFooter className="flex justify-between">{footer}</CardFooter>}
    </Card>
    )
};

export default CardCompact;