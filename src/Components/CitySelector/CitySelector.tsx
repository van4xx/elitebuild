import React, { useState, useRef, useEffect } from "react";
import { cities } from "@/src/source";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import styles from './CitySelector.module.css';

interface CitySelectorProps {
  onCitySelect: (city: string) => void;
  selectedCity: string;
}

const CitySelector: React.FC<CitySelectorProps> = ({ onCitySelect, selectedCity }) => {
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCitySelect = (city: string) => {
    onCitySelect(city);
    setSearchTerm("");
    setIsCityDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsCityDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.city_selector_container}>
      <div 
        className={styles.city_selector_header} 
        onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
      >
        <CiLocationOn className={styles.city_selector_location_icon} />
        <span className={styles.city_selector_selected}>{selectedCity}</span>
        <IoMdArrowDropdown className={styles.city_selector_icon} />
      </div>

      {isCityDropdownOpen && (
        <>
          <div className={styles.city_selector_overlay} onClick={() => setIsCityDropdownOpen(false)} />
          <div className={styles.city_selector_dropdown} ref={dropdownRef}>
            <div className={styles.city_selector_search}>
              <input
                type="text"
                placeholder="Поиск города"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <IoMdClose
                  className={styles.city_selector_clear}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSearchTerm("");
                  }}
                />
              )}
            </div>
            <ul className={styles.city_selector_list}>
              {filteredCities.map((city, index) => (
                <li
                  key={index}
                  className={`${styles.city_selector_item} ${city === selectedCity ? styles.city_selector_item_selected : ''}`}
                  onClick={() => handleCitySelect(city)}
                >
                  {city}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default CitySelector;

