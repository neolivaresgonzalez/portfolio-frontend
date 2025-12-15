import StackIcon from "tech-stack-icons";
import {
    Blocks,
    Database,
    Code2Icon,
    Globe,
    Terminal,
    Layout,
    Server,
    Cloud,
    Workflow,
    Palette
} from "lucide-react";

// Map skill names to tech-stack-icons names
// See https://tech-stack-icons.vercel.app/ for list
export const getStackIconName = (name: string): string | null => {
    const normalized = name.toLowerCase();

    if (normalized.includes("netcore")) return "netcore";
    if (normalized.includes("react")) return "react";
    if (normalized.includes("flask")) return "flask";
    if (normalized.includes("next")) return "nextjs2";
    if (normalized.includes("node")) return "nodejs";
    if (normalized.includes("typescript")) return "typescript";
    if (normalized.includes("javascript")) return "js";
    if (normalized.includes("tailwind")) return "tailwindcss";
    if (normalized.includes("html")) return "html5";
    if (normalized.includes("css")) return "css3";
    if (normalized.includes("python")) return "python";
    if (normalized.includes("mongo")) return "mongodb";
    if (normalized.includes("postgres")) return "postgresql";
    if (normalized.includes("redis")) return "redis";
    if (normalized.includes("aws")) return "aws";
    if (normalized.includes("huawei")) return "huawei";
    if (normalized.includes("azure")) return "azure";
    if (normalized.includes("vercel")) return "vercel";
    if (normalized.includes("digitalocean")) return "digitalocean";
    if (normalized.includes("git")) return "git";
    if (normalized.includes("github")) return "github";
    if (normalized.includes("gitlab")) return "gitlab";
    if (normalized.includes("docker")) return "docker";
    if (normalized.includes("linux")) return "linux";
    if (normalized.includes("figma")) return "figma";
    if (normalized.includes("postman")) return "postman";
    if (normalized.includes("bash")) return "bash";
    if (normalized.includes("illustrator")) return "illustrator";
    if (normalized.includes("angular")) return "angular17";
    if (normalized.includes("adobe")) return "adobe";
    if (normalized.includes("atlassian")) return "atlassian";
    if (normalized.includes("jira")) return "jira";
    if (normalized.includes("vscode")) return "vscode";
    if (normalized.includes("c#")) return "c#";
    if (normalized.includes("redis")) return "redis";
    if (normalized.includes("mysql")) return "mysql";
    if (normalized.includes("java")) return "java";
    if (normalized.includes("electron")) return "electron";
    if (normalized.includes("i18next")) return "i18next";
    if (normalized.includes("nodejs")) return "nodejs";
    if (normalized.includes("npm")) return "npm";
    if (normalized.includes("express")) return "expressjs";

    return null;
};

// Fallback: Map skill names to Lucide icons if tech-stack-icons misses them
export const getLucideIcon = (name: string) => {
    const normalized = name.toLowerCase();

    if (normalized.includes("api")) return Globe;
    if (normalized.includes("database") || normalized.includes("sql")) return Database;
    if (normalized.includes("server") || normalized.includes("backend")) return Server;
    if (normalized.includes("cloud")) return Cloud;
    if (normalized.includes("terminal") || normalized.includes("cli")) return Terminal;
    if (normalized.includes("design") || normalized.includes("ui") || normalized.includes("ux")) return Palette;
    if (normalized.includes("workflow") || normalized.includes("agile") || normalized.includes("scrum")) return Workflow;
    if (normalized.includes("frontend") || normalized.includes("web")) return Layout;
    if (normalized.includes("programación")) return Code2Icon;
    if (normalized.includes("data")) return Blocks;

    return Blocks; // Ultimate fallback
};

// Helper component to render the icon
export function SkillIcon({ name, className }: { name: string, className?: string }) {
    // 1. Try tech-stack-icons
    const iconName = getStackIconName(name);
    if (iconName) {
        return <StackIcon name={iconName} className={className} />;
    }

    // 2. Try Lucide fallback
    const LucideIcon = getLucideIcon(name);
    return <LucideIcon className={className} />;
}

