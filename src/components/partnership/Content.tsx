import { ReTab } from "./Tab"
import Corporate from "./Corporate"; 
import Event from "./Event";
import Marketing from "./Marketing";


const CONTENT_DEFINITION: Array<{
    uid: number;
    tab: string | JSX.Element;
    panel: string | JSX.Element;
  }> = [
    {
      uid: Math.floor(100000 + Math.random() * 900000),
      tab: (
        <>
          <p className="tab-title">Corporate Partnership</p>
        </>
      ),
      panel: (
        <>
          <Corporate />
        </>
      ),
    },
    {
        uid: Math.floor(100000 + Math.random() * 900000),
        tab: (
            <>
              <p className="tab-title">Events Partnership</p>
            </>
          ),
        panel: (
          <>
            <Event />
          </>
        ),
      },
    {
      uid: Math.floor(100000 + Math.random() * 900000),
      tab: (
        <>
          <p className="tab-title">Media & Marketing Partnership</p>
        </>
      ),
      panel: (
        <>
          <Marketing/>
        </>
      ),
    },
  ];

const Content = () => {

    return (
        <div className = 'partnership-content-main px-16 py-20'>
            <ReTab 
                selected={0}
            ariaLabel="Vertical Tabs"
            contentDefinition={CONTENT_DEFINITION}
            />
        </div>
    )
}

export default Content