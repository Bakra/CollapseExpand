import React, { useState, useEffect } from "react";
import { Collapse } from "reactstrap";

function CollapsiblePanel({ children, ...props }) {
    const { title, collapse } = props;
    const [isCollapse, setIsCollapse] = useState(collapse);

    const toggle = () => {
        setIsCollapse(!isCollapse);
    };

    useEffect(() => {
        toggle();
    }, [collapse]);

    return (
        <div className="coll-panel">
            <button
                type="button"
                className="coll-panel-btn btn-primary btn-block text-left"
                onClick={() => toggle()}
            >
                {title}
            </button>
            <Collapse className="border text-left p-2" isOpen={isCollapse}>
                {children}
            </Collapse>
        </div>
    );
}

CollapsiblePanel.defaultProps = {
    children: "Add node as a child",
    title: "Collapsible Panel",
    collapse: true
};

export default CollapsiblePanel;
