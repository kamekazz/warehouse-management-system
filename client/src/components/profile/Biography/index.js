import React from "react";
import Widget from "components/Widget";

const Biography = () => {
  return (
    <Widget styleName="jr-card-profile">
      <div className="mb-3">
        <h3 className="card-title mb-2 mb-md-3">Biography</h3>
        <p className="text-grey jr-fs-sm mb-0">A little flash back of Kiley Brown</p>
      </div>
      <h3 className="jr-font-weight-light">Donec dignissim gravida sem, ut cursus dolor hendrerit et. Morbi
        volutpat.</h3>
      <p>Augue mauris dignissim arcu, ut venenatis metus ante eu orci. Donec non maximus neque,
        ut finibus ex. Quisque semper ornare magna, sed ullamcorper risus luctus quis. Etiam tristique
        dui vitae diam rutrum sodales. Mauris feugiat lectus felis, nec ullamcorper risus elementum at.
        Aliquam erat volutpat. Nullam et est eget metus gravida tincidunt.
        Phasellus sed odio eu lacus venenatis.
      </p>
      <p>Suspendisse vel bibendum ex. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Sed a felis nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie ultricies urna non
        volutpat.
        Nam fermentum cursus elit, et tempus metus scelerisque imperdiet. Sed tincidunt molestie justo,
        a vulputate velit sagittis at. Pellentesque consequat leo tortor.
      </p>

    </Widget>
  )
}


export default Biography;
