"use client";

import React, { useState } from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    Grid,
    Card,
    CardContent,
    CardMedia,
    MenuItem,
    FormControl,
    Select,
    Tooltip,
    IconButton,
} from "@mui/material";
import { LocalizationProvider, DateRangePicker } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import PersonIcon from '@mui/icons-material/Person';
import BedIcon from '@mui/icons-material/Hotel';
import RamenDiningOutlinedIcon from '@mui/icons-material/RamenDiningOutlined';
import RemoveIcon from '@mui/icons-material/RemoveOutlined';
import AddIcon from '@mui/icons-material/AddOutlined';

import dayjs from "dayjs";
import { useRef } from "react";
import { useEffect } from "react";
const rooms = [
    {
        name: "Windchimes Duplex Villa",
        maxGuests: 3,
        area: 1200,
        bed: "1 King",
        image:
            "/images/rooms/r1.jpg",
        pricePerNight: 45000,
        description:
            `Step into a warm and inviting villa designed for comfort and relaxation, where every corner reflects thoughtful design and attention to detail.  
Enjoy a spacious living area perfect for family gatherings or quiet moments, a private balcony offering breathtaking scenic views, and modern amenities that make your stay unforgettable.  
The villa also features a fully equipped kitchen, elegant dining spaces, and cozy bedrooms with plush bedding, ensuring that each moment feels luxurious and serene.  
Spend your evenings in the ambient lounge area.`

    },
    {
        name: "Mistwood Villa",
        maxGuests: 4,
        area: 1500,
        bed: "2 Queen",
        image:
            "/images/rooms/r2.jpg",
        pricePerNight: 55000,
        description:
            `Experience elegance in this luxurious suite with refined interiors, 
            designed to provide both comfort and style. Unwind on your private terrace 
            while enjoying the surrounding views, and take advantage of the thoughtfully curated furnishings and modern 
            conveniences that enhance your stay. The suite offers a spacious bedroom, sophisticated living area, and an elegant 
            bathroom with premium fixtures. Every detail, from lighting to décor, 
            has been carefully chosen to create a serene and indulgent atmosphere for your perfect getaway.`,
    },
    {
        name: "Forest Retreat Villa",
        maxGuests: 5,
        area: 1800,
        bed: "3 King",
        image:
            "/images/rooms/r3.jpg",
        pricePerNight: 65000,
        description:
            `Discover the charm of this cozy cottage nestled amidst lush greenery, 
            where rustic elegance meets modern comfort. Bright natural light fills the rooms, highlighting 
            the tasteful décor and inviting ambiance. Relax in the comfortable living spaces, 
            prepare meals in the well-equipped kitchen, or unwind in the charming bedrooms designed 
            for restful sleep. Outdoor seating areas and tranquil surroundings make it ideal 
            for enjoying peaceful mornings or leisurely evenings, providing an intimate retreat away 
            from the bustle of everyday life.`
    },
];

export default function Booking() {
    const [checkIn, setCheckIn] = useState(dayjs());
    const [checkOut, setCheckOut] = useState(dayjs().add(1, "day"));
    const [dateRange, setDateRange] = useState([dayjs(), dayjs().add(1, "day")]);
    const [selectedRoom, setSelectedRoom] = useState("");


    const [currentImage, setCurrentImage] = useState(0);
    const [selectedRooms, setSelectedRooms] = useState(Array(rooms.length).fill(0));

    const [open, setOpen] = useState(false);
    const [roomSelections, setRoomSelections] = useState([{ adults: 1, children: 0 }]);
    const toggleOpen = () => setOpen(!open);
    const boxRef = useRef(null);

    // const nextImage = () => setCurrentImage((prev) => (prev + 1) % room.images.length);
    // const prevImage = () =>
    //     setCurrentImage((prev) => (prev === 0 ? room.images.length - 1 : prev - 1));

    // ✅ Detect click outside popup
    useEffect(() => {
        function handleClickOutside(event) {
            if (boxRef.current && !boxRef.current.contains(event.target)) {
                setOpen(false);
            }
        }
        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);


    const handleSelectChange = (index, value) => {
        const newSelected = [...selectedRooms];
        newSelected[index] = value;
        setSelectedRooms(newSelected);
    };

    const handleBooking = () => {
        alert(
            `Booked ${selectedRoom} from ${checkIn.format(
                "DD/MM/YYYY"
            )} to ${checkOut.format("DD/MM/YYYY")}`
        );
    };

    const updateCount = (index, type, action) => {
        setRoomSelections((prev) =>
            prev.map((room, i) => {
                if (i === index) {
                    let value = room[type];
                    if (action === "increase") value++;
                    if (action === "decrease" && value > (type === "adults" ? 1 : 0)) value--;
                    return { ...room, [type]: value };
                }
                return room;
            })
        );
    };
    const addRoom = () => setRoomSelections([...roomSelections, { adults: 1, children: 0 }]);

    return (
        <Box sx={{ px: 4, mb: 4, maxWidth: 1200, mx: "auto", borderRadius: 0 }}>
            {/* Hero Section */}
            <Card sx={{ mb: 4, backgroundColor: "#f8e9df" }}>
                <CardContent sx={{ bgcolor: "#0c6a8e", color: "#fff" }}>
                    <Typography variant="h4" sx={{ fontSize: 18, fontFamily: "serif" }}>
                        Timbertales Luxury Resort
                    </Typography>
                </CardContent>
                <div
                    sx={{
                        backgroundColor: "black",
                        height: 300,
                    }}
                >
                    <CardMedia
                        component="img"
                        image="/images/home-banner.jpg"
                        alt="Timbertales"
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                        }}
                    />
                </div>

                {/* Booking Form */}
                <CardContent sx={{ p: 3, mb: 4 }}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            flexWrap: "wrap",
                            gap: 2,
                            alignItems: "center",
                            p: 2,
                        }}
                    >
                        {/* Date Range Picker - takes more space */}
                        <Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    mb: 1,
                                }}
                            >
                                <Typography variant="body2">Check-In</Typography>
                                <Typography variant="body2" sx={{ textAlign: "right" }}>
                                    Check-Out
                                </Typography>
                            </Box>

                            {/* Date Range Picker */}
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateRangePicker
                                    startText="Check-In"
                                    endText="Check-Out"
                                    value={dateRange}
                                    onChange={(newValue) => setDateRange(newValue)}
                                    renderInput={(startProps, endProps) => (
                                        <Box sx={{ display: "flex", gap: 1, width: "100%" }}>
                                            <TextField {...startProps} sx={{ flex: 1 }} />
                                            <TextField {...endProps} sx={{ flex: 1 }} />
                                        </Box>
                                    )}
                                />
                            </LocalizationProvider>
                        </Box>

                        {/* Room Select */}
                        <Box sx={{ flex: 1, minWidth: 200 }}>
                            {/* Trigger */}
                            <Box
                                sx={{
                                    p: 1,
                                    border: "1px solid #ccc",
                                    borderRadius: 1,
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Typography variant="body2">
                                    {roomSelections.length} Room{roomSelections.length > 1 ? "s" : ""},{" "}
                                    {roomSelections.reduce((a, r) => a + r.adults, 0)} Adult
                                    {roomSelections.reduce((a, r) => a + r.adults, 0) > 1 ? "s" : ""},{" "}
                                    {roomSelections.reduce((a, r) => a + r.children, 0)} Child
                                    {roomSelections.reduce((a, r) => a + r.children, 0) > 1 ? "ren" : ""}
                                </Typography>
                                {open ?
                                    <RemoveIcon sx={{ color: "#c37968", fontSize: "18px", cursor: "pointer" }} onClick={toggleOpen} /> :
                                    <AddIcon sx={{ color: "#c37968", fontSize: "18px", cursor: "pointer" }} onClick={toggleOpen} />
                                }
                            </Box>

                            {/* Room details popup */}
                            {open && (
                                <Box
                                    sx={{
                                        mt: 1,
                                        p: 2,
                                        border: "1px solid #ccc",
                                        borderRadius: 1,
                                        backgroundColor: "#fafafa",
                                        position: "absolute",
                                    }}
                                    ref={boxRef}
                                >
                                    {roomSelections.map((room, i) => (
                                        <Box key={i} sx={{ mb: 2, borderBottom: "1px solid #eee", pb: 2 }}>
                                            {/* Header Row */}
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    mb: 1,
                                                }}
                                            >
                                                <Typography variant="subtitle2">Room {i + 1}</Typography>

                                                {/* Remove Room */}
                                                {roomSelections.length > 1 && (
                                                    <IconButton
                                                        size="small"
                                                        color="error"
                                                        onClick={() =>
                                                            setRoomSelections((prev) => prev.filter((_, idx) => idx !== i))
                                                        }
                                                    >
                                                        <RemoveIcon sx={{ fontSize: "18px" }} />
                                                    </IconButton>
                                                )}
                                            </Box>

                                            {/* Adults + Children Counter */}
                                            <Box sx={{ display: "flex", gap: 3, mt: 1 }}>
                                                {/* Adults */}
                                                <Box>
                                                    <Typography variant="caption">Adult</Typography>
                                                    <Box sx={{ display: "flex", alignItems: "center", mt: 0.5 }}>
                                                        <IconButton
                                                            size="small"
                                                            onClick={() => updateCount(i, "adults", "decrease")}
                                                            disabled={room.adults <= 1}
                                                        >
                                                            <RemoveIcon sx={{ fontSize: "18px" }} />
                                                        </IconButton>
                                                        <input
                                                            type="text"
                                                            readOnly
                                                            value={room.adults}
                                                            style={{
                                                                width: 30,
                                                                textAlign: "center",
                                                                border: "none",
                                                                background: "transparent",
                                                            }}
                                                        />
                                                        <IconButton
                                                            size="small"
                                                            onClick={() => updateCount(i, "adults", "increase")}
                                                        >
                                                            <AddIcon sx={{ fontSize: "18px" }} />
                                                        </IconButton>
                                                    </Box>
                                                </Box>

                                                {/* Children */}
                                                <Box>
                                                    <Typography variant="caption">Child</Typography>
                                                    <Box sx={{ display: "flex", alignItems: "center", mt: 0.5 }}>
                                                        <IconButton
                                                            size="small"
                                                            onClick={() => updateCount(i, "children", "decrease")}
                                                            disabled={room.children <= 0}
                                                        >
                                                            <RemoveIcon sx={{ fontSize: "18px" }} />
                                                        </IconButton>
                                                        <input
                                                            type="text"
                                                            readOnly
                                                            value={room.children}
                                                            style={{
                                                                width: 30,
                                                                textAlign: "center",
                                                                border: "none",
                                                                background: "transparent",
                                                            }}
                                                        />
                                                        <IconButton
                                                            size="small"
                                                            onClick={() => updateCount(i, "children", "increase")}
                                                        >
                                                            <AddIcon sx={{ fontSize: "18px" }} />
                                                        </IconButton>
                                                    </Box>

                                                    {/* Child Age Selectors */}
                                                    {room.children > 0 && (
                                                        <Box sx={{ mt: 1, display: "flex", gap: 1, flexWrap: "wrap" }}>
                                                            {Array.from({ length: room.children }).map((_, cIdx) => (
                                                                <Box sx={{ mt: 1, display: "flex", gap: 2, flexWrap: "wrap" }}>
                                                                    <Typography variant="caption" sx={{ mb: 0.5 }}>
                                                                        Child {cIdx + 1}
                                                                    </Typography>
                                                                    <FormControl key={cIdx} size="small" sx={{ width: 80 }}>
                                                                        <Select
                                                                            value={room.childAges?.[cIdx] ?? ""}
                                                                            displayEmpty
                                                                            onChange={(e) => {
                                                                                const newAges = [...(room.childAges || [])];
                                                                                newAges[cIdx] = e.target.value;
                                                                                setRoomSelections((prev) =>
                                                                                    prev.map((r, ri) =>
                                                                                        ri === i ? { ...r, childAges: newAges } : r
                                                                                    )
                                                                                );
                                                                            }}
                                                                        >
                                                                            <MenuItem value="">
                                                                                <em>Age</em>
                                                                            </MenuItem>
                                                                            {Array.from({ length: 12 }).map((_, age) => (
                                                                                <MenuItem key={age + 1} value={age + 1}>
                                                                                    {age + 1}
                                                                                </MenuItem>
                                                                            ))}
                                                                        </Select>
                                                                    </FormControl>
                                                                </Box>
                                                            ))}
                                                        </Box>
                                                    )}
                                                </Box>
                                            </Box>
                                        </Box>
                                    ))}

                                    <Button variant="outlined" onClick={addRoom} startIcon={<AddIcon />}>
                                        Add Room
                                    </Button>
                                </Box>
                            )}

                        </Box>

                        {/* Promo Code */}
                        <TextField
                            placeholder="Promo Code"
                            onChange={(e) => setPromoCode(e.target.value)}
                            sx={{ flex: 1, minWidth: 150 }}
                        />

                        {/* Book Button */}
                        <Button
                            variant="contained"
                            sx={{ flex: 1, minWidth: 150, height: 56, backgroundColor: "#c37968", color: "#fff" }}
                            onClick={handleBooking}
                        // disabled={!selectedRoom}
                        >
                            Search
                        </Button>
                    </Box>

                </CardContent>
            </Card>

            <Box
                sx={{
                    display: "flex",
                    gap: 2,
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                {rooms.map((room, index) => (
                    <Card
                        key={index}
                        sx={{ display: "flex", width: "100%", minWidth: 300, height: 300, flexDirection: { xs: "column", md: "row" } }}
                    >
                        {/* Image */}
                        <CardMedia
                            component="img"
                            sx={{ width: { xs: "100%", md: "40%" }, objectFit: "cover" }}
                            image={room.image}
                            alt={room.name}
                        />

                        {/* Content */}
                        <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                            {/* Title */}
                            <Box>
                                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <Typography variant="h6" sx={{ color: "#c37968", fontSize: "18px", fontFamily: "serif" }}>
                                        {room.name}
                                    </Typography>

                                    {/* Icons row */}
                                    <Box sx={{ display: "flex", gap: 0.5, mt: 1, mb: 1 }}>
                                        <Tooltip title={`Maximum ${room.maxGuests} Guest`} arrow>
                                            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, backgroundColor: "#e0dedeff", p: "3px", borderRadius: "2px" }}>
                                                <Typography>{room.maxGuests}</Typography>
                                                <PersonIcon fontSize="small" />
                                            </Box>
                                        </Tooltip>
                                        <Typography sx={{ backgroundColor: "#e0dedeff", p: "3px", borderRadius: "2px" }}>{room.area} sq ft</Typography>
                                        <Tooltip title={room.bed} arrow>
                                            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, backgroundColor: "#e0dedeff", p: "3px", borderRadius: "2px" }}>
                                                <BedIcon fontSize="small" />
                                            </Box>
                                        </Tooltip>
                                    </Box>
                                </Box>
                                {/* Description */}
                                <Typography variant="body2" color="text.secondary">
                                    {room.description}
                                </Typography>
                            </Box>

                            {/* Bottom row */}
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mt: 2, fontFamily: "serif", fontSize: "14px" }}>
                                <Box sx={{ fontFamily: "serif", }}>
                                    <p>Welcome aboard package</p>
                                    <p style={{
                                        border: "1px solid black",
                                        borderRadius: "5px",
                                        padding: "5px 10px",
                                        width: "fit-content",
                                        marginTop: "5px",
                                    }}><RamenDiningOutlinedIcon style={{ fontSize: "18px" }} /> Full Board</p>
                                </Box>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 2, }}>
                                    <FormControl size="small" sx={{ minWidth: 80 }}>
                                        Room
                                        <Select
                                            value={selectedRooms[index]} // initially 0
                                            onChange={(e) => handleSelectChange(index, Number(e.target.value))}
                                        >
                                            {Array.from({ length: 11 }).map((_, i) => (
                                                <MenuItem key={i} value={i}>
                                                    {i}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    <Typography sx={{ fontWeight: 600 }}>
                                        INR {room.pricePerNight.toLocaleString()}
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        disabled={selectedRooms[index] === 0}
                                    >
                                        Book Now
                                    </Button>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
}
