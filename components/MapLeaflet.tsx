'use client';

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import L, { LatLngBoundsExpression, LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Konfigurasi icon marker Leaflet
const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface MapLeafletProps {
  center: [number, number];
  zoom?: number;
  popupText?: string;
  tileType?: 'satellite' | 'street';
  googleMapsUrl?: string;
  maxBounds?: LatLngBoundsExpression;
  minZoom?: number;
  maxZoom?: number;
  boundaryPolygon?: LatLngTuple[];
}

export default function MapLeaflet({
  center,
  zoom = 15,
  popupText = 'Lokasi',
  tileType = 'street',
  googleMapsUrl,
  maxBounds,
  minZoom = 12,
  maxZoom = 18,
  boundaryPolygon,
}: MapLeafletProps) {
  const tileUrl =
    tileType === 'satellite'
      ? 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
      : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

  return (
    <div className="relative z-0 overflow-hidden rounded-2xl shadow-lg border border-slate-100 h-[300px] w-full">
      <MapContainer
        center={center}
        zoom={zoom}
        minZoom={minZoom}
        maxZoom={maxZoom}
        maxBounds={maxBounds}
        maxBoundsViscosity={1.0}
        scrollWheelZoom={false}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url={tileUrl}
        />

        {/* GARIS PEMBATAS WILAYAH DESA MERAH PUTUS-PUTUS */}
        {boundaryPolygon && boundaryPolygon.length > 0 && (
          <Polygon
            positions={boundaryPolygon}
            pathOptions={{
              color: '#ef4444',      // Garis merah terang
              weight: 3,             // Ketebalan garis
              dashArray: '6, 6',     // Pola putus-putus
              fillColor: '#ef4444',  // Isian area
              fillOpacity: 0.12,     // Transparansi isian
            }}
          />
        )}

        <Marker position={center} icon={customIcon}>
          <Popup>
            <div className="text-center font-sans text-xs">
              <p className="font-semibold text-slate-800">{popupText}</p>
              {googleMapsUrl && (
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-1 text-emerald-600 font-bold hover:underline"
                >
                  Buka di Google Maps &rarr;
                </a>
              )}
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}