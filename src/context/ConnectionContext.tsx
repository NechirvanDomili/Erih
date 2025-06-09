import { createContext, useContext, useState, type ReactNode, useEffect } from 'react';

interface Contact {
    id: number;
    institutionName: string;
    region: string;
}

interface ConnectionContextType {
    contacts: Contact[];
    addContact: (contact: Contact) => void;
}

const ConnectionContext = createContext<ConnectionContextType | undefined>(undefined);

export const ConnectionProvider = ({ children }: { children: ReactNode }) => {
    const [contacts, setContacts] = useState<Contact[]>([]);

    // optional: aus localStorage laden
    useEffect(() => {
        const saved = localStorage.getItem('erih-contacts');
        if (saved) setContacts(JSON.parse(saved));
    }, []);

    const addContact = (contact: Contact) => {
        setContacts((prev) => {
            const updated = [...prev, contact];
            localStorage.setItem('erih-contacts', JSON.stringify(updated));
            return updated;
        });
    };

    return (
        <ConnectionContext.Provider value={{ contacts, addContact }}>
            {children}
        </ConnectionContext.Provider>
    );
};

export const useConnections = () => {
    const context = useContext(ConnectionContext);
    if (!context) throw new Error('useConnections must be used within ConnectionProvider');
    return context;
};
