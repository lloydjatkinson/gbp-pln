import 'preact/debug';
import 'preact/devtools';
import { useState, useEffect } from 'preact/hooks';
import { formatDistance, subHours } from 'date-fns';
import { pl } from 'date-fns/locale';

export const TimeAgo = ({ date }: { date: Date }) => {
    const [formattedEnglish, setFormattedEnglish] = useState(formatDistance(date, new Date()));
    const [formattedPolish, setFormattedPolish] = useState(formatDistance(date, new Date(), { locale: pl }));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setFormattedEnglish(() => formatDistance(date, new Date()));
            setFormattedPolish(() => formatDistance(date, new Date(), { locale: pl }));
        }, 1000);

        return () => clearInterval(intervalId);
    }, [date]);

    const message = `Last checked ${formattedEnglish} ago / Ostatnio sprawdzane ${formattedPolish} temu`;

    return (
        <span>{ message }</span>
    );
};