import React from "react";
import "./TeamMemberPerfomance.css";
import TeamMember from "./TeamMember/TeamMember";
function TeamMemberPerfomance() {
  return (
    <div className="member_perfomance">
      <TeamMember
        data={{
          name: "Devid Esoni",
          designation: "Product Manager",
          rating: 9.8,
          img:
            "https://media.istockphoto.com/photos/portrait-of-smiling-handsome-man-in-blue-tshirt-standing-with-crossed-picture-id1045886560?k=6&m=1045886560&s=612x612&w=0&h=hXrxai1QKrfdqWdORI4TZ-M0ceCVakt4o6532vHaS3I=",
        }}
      />
      <TeamMember
        data={{
          name: "Ripon Video",
          designation: "UX Designer",
          rating: 9.2,
          img:
            "https://s3-alpha-sig.figma.com/img/115c/d059/79e8fcb0da0bba53a1e7d1ec9619a557?Expires=1613347200&Signature=FAK3Fo8VH~eSRaW5v1YLyHn-JU-sBBlbh6OF6RKtYsHHcnQiA-JAprVvY-SKU4bPLrmSxhEiwdDByexdJE8IiXYXZgpZ235agZT-RfQmgIonGfA~J0MKs6UNxeBqUrobqLl95IrOL7cqaVHsQt~Ba3fhSaghbJ9PkiRPd~zZXr8pcX7J7Il4Njh27n1j9aiFT32ALT4Ua11nsLjTUFWG4pHUm3lNpTl5ywETw5FLtDnUf6sXs8lrK3A-t5gXJr140d5iAuPUGoODQPudMzGIlmE5MTifhGcAMnANSbBnuewICRgzCqe0SZ0CxfMRwTu~DPIQircETu8w8EAPG8MowQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        }}
      />
      <TeamMember
        data={{
          name: "Yeasmin Jeo",
          designation: "UI Designer",
          rating: 9.1,
          img:
            "https://thumbs.dreamstime.com/z/blonde-profile-portrait-beautiful-blonde-woman-natural-make-up-beauty-haircare-cosmetics-concept-healthcare-blue-114974938.jpg",
        }}
      />
      <TeamMember
        data={{
          name: "Adrita Kha",
          designation: "Motion Designer",
          rating: 8.5,
          img:
            "https://img3.stockfresh.com/files/f/feedough/m/12/3094147_stock-photo-business-man-posing-in-demi-profile.jpg",
        }}
      />
    </div>
  );
}

export default TeamMemberPerfomance;
