import React from "react";

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

const WelcomeHeader: React.FC<HeaderProps> = ({
  title = "Good morning", //black-sans-400 regular
  subtitle = "William Oluwadamilare", //black-sans-600 semibold
}) => {
  return (
    <header className="py-6">
      <h1 className="text-lg text-gray-600">{title}</h1>
      <p className="text-2xl font-bold text-gray-900">{subtitle}</p>
    </header>
  );
};

export default WelcomeHeader;
