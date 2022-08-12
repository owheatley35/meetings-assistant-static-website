import Constants from "../Constants";

export default function validateNoteText(meetingNote: string): boolean {
    return validateInputString(meetingNote) && (!meetingNote.includes(Constants.NOTE_SPLITTER));
}

export function validateInputString(text: string): boolean {
    return text != null && text != "" && (!text.includes("<script>"))
}

export function validateSqlText(text: string): boolean {
    return validateInputString(text) && ((new Blob([text]).size) < 65535)
}

export function validateSqlLongText(longText: string): boolean {
    return validateInputString(longText) && ((new Blob([longText]).size) < 4294967295)
}
