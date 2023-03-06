export type Event = {
    id: number
    title: string
    description: string | undefined
    start: string
    end: string | undefined
    backgroundColor: 'green',
    borderColor: 'red',
    editable: true
}