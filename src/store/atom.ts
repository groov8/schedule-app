import { atom } from "recoil";
import { Event } from "@/types/types";

export const event = atom<Event[]>({
    key: "event",
    default: []
})