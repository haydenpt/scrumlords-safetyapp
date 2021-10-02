import { Icon } from "@iconify/react";
import { useRef, useState } from "react";
import editFill from "@iconify/icons-eva/edit-fill";
import { Link as RouterLink } from "react-router-dom";
import trash2Outline from "@iconify/icons-eva/trash-2-outline";
import moreVerticalFill from "@iconify/icons-eva/more-vertical-fill";
import peopleFill from "@iconify/icons-eva/people-fill";
// material
import {
  Menu,
  MenuItem,
  IconButton,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import documentSentiment from "@iconify/icons-carbon/document-sentiment";
// import { FormatListBulleted } from "@material-ui/icons";
import { EditMemberModal } from "src/components/_dashboard/members";
import { getUserByEmail } from "src/mysql_db_api/fb_user.js";
import { DeleteConfirmModal } from "src/components/_dashboard/members";
import { useAuth } from "src/authentication/AuthContext";
import {
  getAllMembers,
  deleteOneMember,
  getResumeInfo,
} from "src/mysql_db_api/members";
import { deleteFb_user } from "src/mysql_db_api/fb_user.js";
import { MembersEventModal } from ".";
// ----------------------------------------------------------------------

export default function AdminEventMoreDetails({
  chosenItem,
  // setMembers,
  // members,
  // update_all_members_func,
}) {
  const ref = useRef(null);
  const { setLoading, displayErrMess } = useAuth();
  const event_id = chosenItem.id;
  const [isOpen, setIsOpen] = useState(false);
  const [opentEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openMemberModal, setOpenMemberModal] = useState(false);
  const handleDeleteClick = () => {
    // setOpenDeleteModal(true);
    // setIsOpen(false);
  };
  const handleEditClick = () => {
    // setIsOpen(false);
    // setOpenEditModal(true);
  };
  const openMoreDetails = async () => {
    setIsOpen(true);
  };

  const deleteChosenMember = async () => {
    // setLoading(true);
    // const promise1 = deleteOneMember(chosenItem.psid);
    // const uid = fb_user && fb_user.uid ? fb_user.uid : "not exists";
    // const promise2 = deleteFb_user(uid);
    // const [res1, res2] = await Promise.all([promise1, promise2]);
    // if (res1.data && res2.data) {
    //   displayErrMess("Delete successfully!", "success");
    //   // const members_ = await getAllMembers();
    //   const members_ = members.filter((member) => {
    //     return member.psid != chosenItem.psid;
    //   });
    //   setMembers(members_);
    // } else {
    //   displayErrMess(
    //     "Fail to delete! The object may be restricted for the deletion action",
    //     "error"
    //   );
    // }
    // setLoading(false);
    // setOpenDeleteModal(false);
  };

  return (
    <>
      <IconButton ref={ref} onClick={() => openMoreDetails(true)}>
        <Icon icon={moreVerticalFill} width={20} height={20} />
      </IconButton>

      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: 200, maxWidth: "100%" },
        }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={handleEditClick} sx={{ color: "text.secondary" }}>
          <ListItemIcon>
            <Icon icon={editFill} width={24} height={24} />
          </ListItemIcon>
          <ListItemText
            primary="Edit"
            primaryTypographyProps={{ variant: "body2" }}
          />
        </MenuItem>
        <MenuItem
          onClick={() => setOpenMemberModal(true)}
          sx={{ color: "text.secondary" }}
        >
          <ListItemIcon>
            <Icon icon={peopleFill} width={24} height={24} />
          </ListItemIcon>
          <ListItemText
            primary="View Members"
            primaryTypographyProps={{ variant: "body2" }}
          />
        </MenuItem>
        <MenuItem sx={{ color: "text.secondary" }} onClick={handleDeleteClick}>
          <ListItemIcon>
            <Icon icon={trash2Outline} width={24} height={24} />
          </ListItemIcon>
          <ListItemText
            primary="Delete"
            primaryTypographyProps={{ variant: "body2" }}
          />
        </MenuItem>
      </Menu>
      {openMemberModal && (
        <MembersEventModal
          open={openMemberModal}
          setOpen={setOpenMemberModal}
          event={chosenItem}
        />
      )}
      {/* {opentEditModal && (
        <EditMemberModal
          open={opentEditModal}
          setOpen={setOpenEditModal}
          chosenItem={chosenItem}
          setMembers={setMembers}
          fb_user={fb_user}
          members={members}
          update_all_members_func={update_all_members_func}
        />
      )}

      {openDeleteModal && (
        <DeleteConfirmModal
          open={openDeleteModal}
          setOpen={setOpenDeleteModal}
          excuteFunc={deleteChosenMember}
        />
      )} */}
    </>
  );
}
