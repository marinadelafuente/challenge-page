"use client";

import ProfileModal from "../profileModalContent";

export default function ProfilePage() {
  const savedUsername = localStorage.getItem("savedUsername");
  const savedJobTitle = localStorage.getItem("savedJobTitle");
  const user = { ...{ savedUsername, savedJobTitle } };

  return <ProfileModal savedUser={user} />;
}
