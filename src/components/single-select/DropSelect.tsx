import classNames from "classnames"
import { Button } from "../base/Button"
import Dropper from "../icon/dropper"

export const DropSelect = () => {

    const handleClick = () => {

    }

    return <div>

        <Button className={classNames("px-[39px] py-[2px]")} onClick={handleClick}>
            <Dropper size={40} />
        </Button>

    </div>
}