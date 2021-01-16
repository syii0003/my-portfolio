import React from "react";
import VerticalTimeline from "./Layout/VerticalTimeline";
import VerticalTimelineElement from "./Layout/VerticalTimelineElement";
import StarIcon from "@material-ui/icons/Star";
import experiences from "./Data/experience";

const Experience = () => {
  return (
    <div className="experiences">
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{
              borderTop: `0.5rem solid ${experience.color}`,
              borderRadius: "0.6rem",
              fontSize: "1.8rem",
              background: "#f5f5f5c4",
            }}
            contentArrowStyle={{ borderRight: "1.2rem solid F5F5F5" }}
            date={experience.date}
            iconStyle={{ background: experience.color, color: "#fff" }}
            icon={<experience.icon />}
          >
            <h5 className="vertical-timeline-element-title">
              {experience.title}
            </h5>
            <h6 className="vertical-timeline-element-subtitle">
              {experience.subtitle}
            </h6>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: "#577590", color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
