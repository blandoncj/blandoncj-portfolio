export function calculateDuration(startDate: Date, endDate: Date | null): string {
    const end = endDate || new Date();

    const months = (end.getFullYear() - startDate.getFullYear()) * 12
        + (end.getMonth() - startDate.getMonth());

    if (months < 1) {
        return 'Less than a month';
    }

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (years === 0) {
        return `${remainingMonths} ${remainingMonths === 1 ? 'month' : 'months'}`;
    } else if (remainingMonths === 0) {
        return `${years} ${years === 1 ? 'year' : 'years'}`;
    } else {
        return `${years} ${years === 1 ? 'year' : 'years'} and ${remainingMonths} ${remainingMonths === 1 ? 'month' : 'months'}`;
    }
}

export function formatPeriod(startDate: Date, endDate: Date | null): string {
    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const start = `${monthNames[startDate.getMonth()]} ${startDate.getFullYear()}`;
    const end = endDate ? `${monthNames[endDate.getMonth()]} ${endDate.getFullYear()}` : 'Present';

    return `${start} - ${end}`;
}