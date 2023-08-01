export function upperCaseFirstCharacter(name: string) {
    const nameCorrect = name.charAt(0).toUpperCase() + name.slice(1);
    return nameCorrect;
}
