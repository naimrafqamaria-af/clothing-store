import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const [profileData, setProfileData] = useState({
    name: localStorage.getItem("name") || "",
    email: localStorage.getItem("email") || "",
    phone: localStorage.getItem("phone") || "",
    address: localStorage.getItem("address") || "",
  });

  const role = localStorage.getItem("role");
  const joinDate = localStorage.getItem("joinDate") || "N/A";

  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...profileData });
  const [saved, setSaved] = useState(false);

  const avatarInitials = profileData.name
    ? profileData.name.split(" ").map((n) => n[0]).join("").toUpperCase()
    : "?";

  const orders = JSON.parse(localStorage.getItem("orders") || "[]");

  const handleSave = () => {
    localStorage.setItem("name", formData.name);
    localStorage.setItem("email", formData.email);
    localStorage.setItem("phone", formData.phone);
    localStorage.setItem("address", formData.address);
    setProfileData({ ...formData });
    setIsEditing(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleCancel = () => {
    setFormData({ ...profileData });
    setIsEditing(false);
  };

  const styles = {
    page: {
      minHeight: "100vh",
      backgroundColor: "#f8f5f2",
      padding: "40px 20px",
      fontFamily: "'Segoe UI', sans-serif",
    },
    container: { maxWidth: "860px", margin: "0 auto" },
    backBtn: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      marginBottom: "20px",
      padding: "10px 20px",
      backgroundColor: "#fff",
      color: "#1a1a2e",
      border: "1px solid #ddd",
      borderRadius: "8px",
      fontWeight: "600",
      fontSize: "14px",
      cursor: "pointer",
      fontFamily: "'Segoe UI', sans-serif",
      transition: "all 0.2s",
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: "16px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      overflow: "hidden",
    },
    header: {
      background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
      padding: "40px 30px",
      display: "flex",
      alignItems: "center",
      gap: "24px",
    },
    avatar: {
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      backgroundColor: "#c9a96e",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "28px",
      fontWeight: "700",
      color: "#fff",
      flexShrink: 0,
    },
    headerName: { margin: "0 0 4px 0", fontSize: "24px", fontWeight: "700", color: "#fff" },
    headerEmail: { margin: "0 0 8px 0", fontSize: "14px", color: "#ccc" },
    badge: {
      display: "inline-block",
      backgroundColor: "#c9a96e",
      color: "#fff",
      padding: "3px 12px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: "600",
      textTransform: "capitalize",
    },
    tabs: {
      display: "flex",
      borderBottom: "1px solid #eee",
      padding: "0 30px",
      backgroundColor: "#fff",
    },
    tab: (active) => ({
      padding: "16px 20px",
      cursor: "pointer",
      fontWeight: "600",
      fontSize: "14px",
      color: active ? "#1a1a2e" : "#999",
      background: "none",
      border: "none",
      borderBottom: active ? "2px solid #c9a96e" : "2px solid transparent",
      transition: "all 0.2s",
    }),
    body: { padding: "30px" },
    sectionTitle: {
      fontSize: "16px",
      fontWeight: "700",
      color: "#1a1a2e",
      marginBottom: "20px",
      paddingBottom: "10px",
      borderBottom: "1px solid #f0f0f0",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
      marginBottom: "30px",
    },
    field: { display: "flex", flexDirection: "column", gap: "4px" },
    label: {
      fontSize: "12px",
      color: "#999",
      fontWeight: "600",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
    },
    value: { fontSize: "15px", color: "#1a1a2e", fontWeight: "500" },
    input: {
      fontSize: "15px",
      color: "#1a1a2e",
      padding: "10px 12px",
      borderRadius: "8px",
      border: "1px solid #ddd",
      outline: "none",
      fontFamily: "'Segoe UI', sans-serif",
      width: "100%",
      boxSizing: "border-box",
    },
    editBtn: {
      padding: "12px 28px",
      backgroundColor: "#1a1a2e",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      fontWeight: "600",
      fontSize: "14px",
      cursor: "pointer",
      marginRight: "12px",
    },
    cancelBtn: {
      padding: "12px 28px",
      backgroundColor: "#fff",
      color: "#1a1a2e",
      border: "1px solid #ddd",
      borderRadius: "8px",
      fontWeight: "600",
      fontSize: "14px",
      cursor: "pointer",
    },
    saveBtn: {
      padding: "12px 28px",
      backgroundColor: "#c9a96e",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      fontWeight: "600",
      fontSize: "14px",
      cursor: "pointer",
      marginRight: "12px",
    },
    successBanner: {
      backgroundColor: "#e6f4ea",
      color: "#2e7d32",
      padding: "12px 16px",
      borderRadius: "8px",
      fontWeight: "600",
      fontSize: "14px",
      marginBottom: "20px",
    },
    statGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "16px",
      marginBottom: "30px",
    },
    statCard: {
      backgroundColor: "#f8f5f2",
      borderRadius: "12px",
      padding: "20px",
      textAlign: "center",
    },
    statNumber: { fontSize: "28px", fontWeight: "700", color: "#1a1a2e" },
    statLabel: { fontSize: "12px", color: "#999", marginTop: "4px" },
    emptyOrders: { textAlign: "center", padding: "40px 20px", color: "#999" },
    orderCard: {
      border: "1px solid #eee",
      borderRadius: "10px",
      padding: "16px",
      marginBottom: "12px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* Back to Shop Button */}
        <button style={styles.backBtn} onClick={() => navigate("/shop")}>
          ← Back to Shop
        </button>

        <div style={styles.card}>

          {/* Header */}
          <div style={styles.header}>
            <div style={styles.avatar}>{avatarInitials}</div>
            <div>
              <h2 style={styles.headerName}>{profileData.name || "Guest User"}</h2>
              <p style={styles.headerEmail}>{profileData.email}</p>
              <span style={styles.badge}>{role || "customer"}</span>
            </div>
          </div>

          {/* Tabs */}
          <div style={styles.tabs}>
            {["profile", "orders", "settings"].map((tab) => (
              <button
                key={tab}
                style={styles.tab(activeTab === tab)}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div style={styles.body}>

            {activeTab === "profile" && (
              <>
                {saved && (
                  <div style={styles.successBanner}>✓ Profile updated successfully!</div>
                )}
                <div style={styles.statGrid}>
                  <div style={styles.statCard}>
                    <div style={styles.statNumber}>{orders.length}</div>
                    <div style={styles.statLabel}>Total Orders</div>
                  </div>
                  <div style={styles.statCard}>
                    <div style={styles.statNumber}>
                      {orders.filter((o) => o.status === "delivered").length}
                    </div>
                    <div style={styles.statLabel}>Delivered</div>
                  </div>
                  <div style={styles.statCard}>
                    <div style={styles.statNumber}>
                      {orders.filter((o) => o.status === "pending").length}
                    </div>
                    <div style={styles.statLabel}>Pending</div>
                  </div>
                </div>

                <p style={styles.sectionTitle}>Personal Information</p>
                <div style={styles.grid}>
                  {[
                    { label: "Full Name", key: "name" },
                    { label: "Email Address", key: "email" },
                    { label: "Phone Number", key: "phone" },
                    { label: "Shipping Address", key: "address" },
                  ].map(({ label, key }) => (
                    <div key={key} style={styles.field}>
                      <span style={styles.label}>{label}</span>
                      {isEditing ? (
                        <input
                          style={styles.input}
                          value={formData[key]}
                          onChange={(e) =>
                            setFormData({ ...formData, [key]: e.target.value })
                          }
                        />
                      ) : (
                        <span style={styles.value}>{profileData[key] || "—"}</span>
                      )}
                    </div>
                  ))}
                  <div style={styles.field}>
                    <span style={styles.label}>Member Since</span>
                    <span style={styles.value}>{joinDate}</span>
                  </div>
                  <div style={styles.field}>
                    <span style={styles.label}>Account Role</span>
                    <span style={{ ...styles.value, textTransform: "capitalize" }}>
                      {role || "Customer"}
                    </span>
                  </div>
                </div>

                <div style={{ marginTop: "10px" }}>
                  {isEditing ? (
                    <>
                      <button style={styles.saveBtn} onClick={handleSave}>
                        Save Changes
                      </button>
                      <button style={styles.cancelBtn} onClick={handleCancel}>
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button style={styles.editBtn} onClick={() => setIsEditing(true)}>
                      Edit Profile
                    </button>
                  )}
                </div>
              </>
            )}

            {activeTab === "orders" && (
              <>
                <p style={styles.sectionTitle}>My Orders</p>
                {orders.length === 0 ? (
                  <div style={styles.emptyOrders}>
                    <p style={{ fontSize: "40px", margin: "0 0 10px" }}>🛍️</p>
                    <p style={{ fontWeight: "600", color: "#555" }}>No orders yet</p>
                    <p style={{ fontSize: "14px" }}>Start shopping to see your orders here.</p>
                    <button
                      style={{ ...styles.editBtn, marginTop: "16px" }}
                      onClick={() => navigate("/shop")}
                    >
                      Go to Shop
                    </button>
                  </div>
                ) : (
                  orders.map((order, i) => (
                    <div key={i} style={styles.orderCard}>
                      <div>
                        <p style={{ margin: "0 0 4px", fontWeight: "600" }}>Order #{order.id}</p>
                        <p style={{ margin: 0, fontSize: "13px", color: "#999" }}>{order.date}</p>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <p style={{ margin: "0 0 4px", fontWeight: "700" }}>${order.total}</p>
                        <span
                          style={{
                            fontSize: "12px",
                            padding: "3px 10px",
                            borderRadius: "20px",
                            backgroundColor: order.status === "delivered" ? "#e6f4ea" : "#fff3e0",
                            color: order.status === "delivered" ? "#2e7d32" : "#e65100",
                            fontWeight: "600",
                            textTransform: "capitalize",
                          }}
                        >
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </>
            )}

            {activeTab === "settings" && (
              <>
                <p style={styles.sectionTitle}>Account Settings</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {[
                    { label: "Change Password", desc: "Update your account password" },
                    { label: "Notification Preferences", desc: "Manage email and SMS alerts" },
                    { label: "Saved Addresses", desc: "Add or edit your delivery addresses" },
                    { label: "Payment Methods", desc: "Manage your saved cards" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "16px",
                        border: "1px solid #eee",
                        borderRadius: "10px",
                        cursor: "pointer",
                      }}
                    >
                      <div>
                        <p style={{ margin: "0 0 4px", fontWeight: "600", color: "#1a1a2e" }}>
                          {item.label}
                        </p>
                        <p style={{ margin: 0, fontSize: "13px", color: "#999" }}>{item.desc}</p>
                      </div>
                      <span style={{ color: "#ccc", fontSize: "20px" }}>›</span>
                    </div>
                  ))}
                </div>
                <button
                  style={{
                    marginTop: "24px",
                    padding: "12px 28px",
                    backgroundColor: "#fff",
                    color: "#c0392b",
                    border: "1px solid #c0392b",
                    borderRadius: "8px",
                    fontWeight: "600",
                    fontSize: "14px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    localStorage.clear();
                    window.location.href = "/login";
                  }}
                >
                  Log Out
                </button>
              </>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;