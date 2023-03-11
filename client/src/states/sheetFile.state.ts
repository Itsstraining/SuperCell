import { SheetFile } from "src/app/models/sheetFile.model";

export interface SheetFileState {
    sheetFiles: SheetFile[];
    error: string;
    edittingFile: SheetFile;
    isRename: boolean;
}
