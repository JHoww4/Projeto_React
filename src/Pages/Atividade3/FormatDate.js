const today = new Date();
export function FormatDate(date) {
    return new Intl.DateTimeFormat(
        'en-US',
        { weekday: 'long' }
    ).format(date);

}
export default function TodoList() {
    return(
        <h1>To do list for{FormatDate(today)}</h1>
    );
}