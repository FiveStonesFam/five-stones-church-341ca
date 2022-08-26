import * as React from 'react';
import NextLink from 'next/link';
import { Menu } from '@headlessui/react'

export default function Link({ children, href, ...other }) {
    // Pass Any internal link to Next.js Link, for anything else, use <a> tag
    const internal = /^\/(?!\/)/.test(href);
    if (internal) {
        return (
            <NextLink href={href}>
                <a {...other}>{children}</a>
            </NextLink>
        );
    }

    return (
        <a href={href} {...other}>
            {children}
        </a>
    );
}
