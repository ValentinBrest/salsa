import React, { useState } from 'react';
import cl from './Tabs.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

// Типы для пропсов
type TabItem = {
    id: string;
    label: string | React.ReactNode;
    content: React.ReactNode;
    disabled?: boolean;
};

type TabsProps = {
    tabs: TabItem[];
    defaultActiveTab?: string;
    onChange?: (tabId: string) => void;
    className?: string;
    tabClassName?: string;
    activeTabClassName?: string;
    disabledTabClassName?: string;
    contentClassName?: string;
};

export const Tabs: React.FC<TabsProps> = ({
    tabs,
    defaultActiveTab,
    onChange,
    className = '',
    tabClassName = '',
    activeTabClassName = '',
    disabledTabClassName = '',
    contentClassName = '',
}) => {
    // Определяем активную вкладку
    const initialActiveTab =
        defaultActiveTab || (tabs.length > 0 ? tabs[0].id : '');
    const [activeTab, setActiveTab] = useState(initialActiveTab);

    // Обработчик изменения вкладки
    const handleTabChange = (tabId: string) => {
        if (tabs.find((tab) => tab.id === tabId)?.disabled) return;
        setActiveTab(tabId);
        if (onChange) {
            onChange(tabId);
        }
    };

    // Находим контент активной вкладки
    const activeContent =
        tabs.find((tab) => tab.id === activeTab)?.content || null;

    return (
        <div className={classNames(cl.tabs, {}, [className])}>
            <div className={cl.header} id={'tabs-header'} role='tablist'>
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        role='tab'
                        aria-selected={tab.id === activeTab}
                        aria-disabled={tab.disabled}
                        className={classNames(cl.item, {}, [
                            tabClassName,
                            tab.id === activeTab
                                ? `${cl.active} ${activeTabClassName}`
                                : '',
                            tab.disabled
                                ? `${cl.disabled} ${disabledTabClassName}`
                                : '',
                        ])}
                        onClick={() => handleTabChange(tab.id)}
                        disabled={tab.disabled}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div
                className={classNames(cl.content, {}, [contentClassName])}
                role='tabpanel'
            >
                {activeContent}
            </div>
        </div>
    );
};
