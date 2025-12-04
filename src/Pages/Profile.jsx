import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const ProfilePage = () => {
  const { user, updateUser } = useContext(AuthContext);

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  // ✅ Update profile using context method
  const handleUpdateProfile = async () => {
    setLoading(true);
    try {
      await updateUser({ displayName: name, photoURL: photo });


      toast.success("Profile updated successfully!")
      setIsEditing(false);
    } catch (error) {
      console.error("Profile update error:", error);
      alert("❌ Failed to update profile. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-h-screen flex flex-col md:flex-row items-center mb-10">
      <div className="flex-1 flex justify-center md:justify-end mb-8 md:mb-0">
        <img
          src={photo || user?.photoURL}
          alt="User Avatar"
          className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover border-4 border-blue-500 shadow-lg mt-5"
        />
      </div>

   
      <div className="flex-1 md:pl-16 text-center md:text-left">
        {!isEditing ? (
          <>
            <h1 className="text-3xl font-semibold text-gray-800">
              {user?.displayName}
            </h1>
            <p className="text-gray-500 mt-2">{user?.email}</p>

            <button
              onClick={() => setIsEditing(true)}
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full shadow-md transition duration-300"
            >
              Update Profile
            </button>
          </>
        ) : (
          <div className="space-y-4 md:text-left">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Display Name"
              className="w-full md:w-3/4 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              placeholder="Photo URL"
              className="w-full md:w-3/4 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <div className="flex gap-4 mt-4">
              <button
                onClick={handleUpdateProfile}
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full shadow-md transition duration-300 disabled:opacity-50"
              >
                {loading ? "Updating..." : "Save"}
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-6 rounded-full shadow-md transition duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    <Toaster/>
    </div>

  );
};

export default ProfilePage;
