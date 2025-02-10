


export const extractSubString = (string: string, regex: RegExp): any => {
    const match = string.match(regex);
    if (match && match[1]) {
        const jsonString = match[1]
            .replace(/True/g, 'true')
            .replace(/'/g, '"');
        return JSON.parse(jsonString);
    }
    return null;
}

export const parseAnswer = (response: string): any => {
    const match = response.match(/\*\*\*({.*})\*\*\*/);
    if (match && match[1]) {
        const jsonString = match[1]
            .replace(/True/g, 'true')
        return JSON.parse(jsonString);
    }
    return {};
};