import { useState } from "react";
import { LayoutGrid, Search, Bell, Plus, Menu, X } from "lucide-react";
import img from "../assests/profile-img.png";
import Image from "next/image";

function NavItem({ icon: Icon, label, badge }) {
  return (
    <button className="nav-item">
      <Icon size={18} />
      <span>{label}</span>
      {badge && <span className="badge">{badge}</span>}
    </button>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header-wrapper">
      <div className="header-card">
        <div className="header-inner">
          {/* Brand */}
          <div className="brand">
            <div className="brand-logo">
              <div className="brand-logo-circle"></div>
            </div>
            <div className="brand-text">
              <div className="brand-title">Tallento.ai</div>
              <div className="brand-tagline">Where AI Meets Ambition</div>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="nav">
            <NavItem icon={LayoutGrid} label="Job Category" />
            <NavItem icon={Search} label="Find Jobs" />
            <NavItem icon={Bell} label="Notifications" badge="29" />
          </nav>

          {/* CTA + Avatar */}
          <div
            className="cta-avatar"
            style={{ display: "flex", alignItems: "center", gap: "12px" }}
          >
            <button className="cta-btn">
              <Plus size={16} />
              <span>Post a Job</span>
            </button>
            <div className="avatar">
              <Image src={img} alt="Profile" width={40} height={40} className="first-img"/>
            </div>
          </div>

          {/* Mobile menu toggle */}
          <button className="menu-toggle" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mobile-menu">
            <div className="mobile-nav">
              <NavItem icon={LayoutGrid} label="Job Category" />
              <NavItem icon={Search} label="Find Jobs" />
              <NavItem icon={Bell} label="Notifications" badge="29" />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "8px",
                }}
              >
                <button className="cta-btn">
                  <Plus size={16} />
                  <span>Post a Job</span>
                </button>
                <div className="avatar">
                  <Image src={img} alt="Profile" width={40} height={40} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
