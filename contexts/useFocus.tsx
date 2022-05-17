import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

interface ContextFocusProviderData {
    open: boolean;
    handleSearchFocus:() => void;
    handleSearchOnBlur:() => void;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

interface FocusProps {
    children: ReactNode;
}

export const ContextFocus = createContext<ContextFocusProviderData>({} as ContextFocusProviderData)

export function FocusProvider({children}: FocusProps) {

    const [open, setOpen] = useState(false)

    function handleSearchFocus() {
        setOpen(true)
    }

    function handleSearchOnBlur() {
        setOpen(false)
    }

    return (
        <ContextFocus.Provider value={{ open, handleSearchFocus, handleSearchOnBlur, setOpen }} >
            {children}
        </ContextFocus.Provider>
    )
}

export function useFocus() {
    const context = useContext(ContextFocus)

    return context
}