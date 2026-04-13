import { Link } from "@tanstack/react-router";
import { SearchX } from "lucide-react";
import { useMemo, useState } from "react";
import PropertyCard from "../components/PropertyCard";
import { type Property, properties } from "../data/properties";

type TypeFilter = "All" | Property["type"];
type CategoryFilter = "All" | Property["category"];
type BhkFilter = "All" | "1" | "2" | "3" | "4+";
type LocationFilter =
  | "All"
  | "Vasant Kunj"
  | "Dwarka"
  | "Rohini"
  | "South Delhi"
  | "Connaught Place"
  | "Saket";

const typeOptions: TypeFilter[] = ["All", "Buy", "Sell", "Rent"];
const categoryOptions: CategoryFilter[] = [
  "All",
  "Apartment",
  "Villa",
  "Plot",
  "Commercial",
];
const bhkOptions: BhkFilter[] = ["All", "1", "2", "3", "4+"];
const locationOptions: LocationFilter[] = [
  "All",
  "Vasant Kunj",
  "Dwarka",
  "Rohini",
  "South Delhi",
  "Connaught Place",
  "Saket",
];

const selectClass =
  "border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white text-[#1A1A2E] focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-[#C9A84C] transition-colors duration-200 cursor-pointer";

export default function Properties() {
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("All");
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("All");
  const [bhkFilter, setBhkFilter] = useState<BhkFilter>("All");
  const [locationFilter, setLocationFilter] = useState<LocationFilter>("All");

  const isFiltered =
    typeFilter !== "All" ||
    categoryFilter !== "All" ||
    bhkFilter !== "All" ||
    locationFilter !== "All";

  const filteredProperties = useMemo(() => {
    return properties.filter((p) => {
      if (typeFilter !== "All" && p.type !== typeFilter) return false;
      if (categoryFilter !== "All" && p.category !== categoryFilter)
        return false;
      if (bhkFilter !== "All") {
        if (bhkFilter === "4+") {
          if (p.bhk === null || p.bhk < 4) return false;
        } else {
          if (p.bhk !== Number(bhkFilter)) return false;
        }
      }
      if (locationFilter !== "All") {
        if (!p.location.toLowerCase().includes(locationFilter.toLowerCase()))
          return false;
      }
      return true;
    });
  }, [typeFilter, categoryFilter, bhkFilter, locationFilter]);

  function resetFilters() {
    setTypeFilter("All");
    setCategoryFilter("All");
    setBhkFilter("All");
    setLocationFilter("All");
  }

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* Page Banner */}
      <section className="relative bg-[#0B1D3A] py-16 overflow-hidden">
        <div className="gold-dot-pattern absolute inset-0 opacity-60 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl font-bold text-white mb-3">
            All Properties
          </h1>
          <nav
            aria-label="Breadcrumb"
            className="flex items-center justify-center gap-2 text-sm text-gray-300"
          >
            <Link
              to="/"
              className="hover:text-[#C9A84C] transition-colors duration-200"
              data-ocid="breadcrumb-home"
            >
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-[#C9A84C] font-medium">Properties</span>
          </nav>
        </div>
      </section>

      {/* Filter Bar */}
      <div
        className="bg-white shadow-sm sticky top-[72px] z-40 border-b border-gray-100"
        data-ocid="filter-bar"
      >
        <div className="flex flex-wrap gap-3 items-center justify-between py-4 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 items-center">
            {/* Type filter */}
            <label className="sr-only" htmlFor="filter-type">
              Property Type
            </label>
            <select
              id="filter-type"
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value as TypeFilter)}
              className={selectClass}
              data-ocid="filter-type"
            >
              {typeOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt === "All" ? "Type: All" : opt}
                </option>
              ))}
            </select>

            {/* Category filter */}
            <label className="sr-only" htmlFor="filter-category">
              Category
            </label>
            <select
              id="filter-category"
              value={categoryFilter}
              onChange={(e) =>
                setCategoryFilter(e.target.value as CategoryFilter)
              }
              className={selectClass}
              data-ocid="filter-category"
            >
              {categoryOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt === "All" ? "Category: All" : opt}
                </option>
              ))}
            </select>

            {/* BHK filter */}
            <label className="sr-only" htmlFor="filter-bhk">
              BHK
            </label>
            <select
              id="filter-bhk"
              value={bhkFilter}
              onChange={(e) => setBhkFilter(e.target.value as BhkFilter)}
              className={selectClass}
              data-ocid="filter-bhk"
            >
              {bhkOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt === "All" ? "BHK: All" : `${opt} BHK`}
                </option>
              ))}
            </select>

            {/* Location filter */}
            <label className="sr-only" htmlFor="filter-location">
              Location
            </label>
            <select
              id="filter-location"
              value={locationFilter}
              onChange={(e) =>
                setLocationFilter(e.target.value as LocationFilter)
              }
              className={selectClass}
              data-ocid="filter-location"
            >
              {locationOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt === "All" ? "Location: All" : opt}
                </option>
              ))}
            </select>
          </div>

          {/* Reset button — only shown when any filter is active */}
          {isFiltered && (
            <button
              type="button"
              onClick={resetFilters}
              className="btn-press px-4 py-2 rounded-lg border border-[#C9A84C] text-[#C9A84C] text-sm font-medium hover:bg-[#C9A84C]/10 transition-colors duration-200 whitespace-nowrap"
              data-ocid="filter-reset"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6 pb-2">
        <p className="text-[#4A5568] text-sm" data-ocid="results-count">
          <span className="font-semibold text-[#0B1D3A]">
            {filteredProperties.length}
          </span>{" "}
          {filteredProperties.length === 1 ? "Property" : "Properties"} Found
        </p>
      </div>

      {/* Property Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-6 pb-16">
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <div key={property.id} className="fade-in-up visible">
                <PropertyCard
                  id={property.id}
                  title={property.title}
                  location={property.location}
                  price={property.price}
                  bhk={property.bhk}
                  area={property.area}
                  type={property.type}
                  status={property.status}
                  image={property.image}
                  isFeatured={property.isFeatured}
                />
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div
            className="flex flex-col items-center justify-center py-20 text-center"
            data-ocid="empty-state"
          >
            <SearchX
              className="text-[#C9A84C] mb-6"
              width={64}
              height={64}
              strokeWidth={1.5}
            />
            <h2 className="font-display text-2xl font-semibold text-[#1A1A2E] mb-3">
              No properties match your filters
            </h2>
            <p className="text-[#4A5568] text-base mb-8 max-w-md">
              Try adjusting your filters or reset to see all properties
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="btn-press px-6 py-3 rounded-lg bg-[#C9A84C] text-[#0B1D3A] font-semibold text-sm hover:bg-[#E5C97A] transition-colors duration-200"
              data-ocid="empty-state-reset"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
