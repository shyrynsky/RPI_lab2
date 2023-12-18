import style from './PersonTimeline.module.css'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import {useTranslation} from "react-i18next";


export function PersonTimeline({ person }) {
    const {t} = useTranslation("ns1");
    const timeline_data = person.timeline_data

    return (
        <section className={style.person_timeline_section}>
            <div className='container'>
                <div className={style.title_container}>{t("timeline")}</div>

                <Timeline position="alternate">
                    {Object.entries(timeline_data).map(([title, text], index) => (
                        <TimelineItem key={index}>
                            <TimelineOppositeContent style={{ fontSize: '16px' }} color="text.secondary">
                                {title}
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent style={{ fontSize: '16px' }}>{text}</TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </div>
        </section>
    )
}