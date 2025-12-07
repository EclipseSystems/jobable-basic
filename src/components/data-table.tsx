"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  getFilteredRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { DataTablePagination } from "./pagination";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  Columns3Icon,
  RefreshCcwIcon,
  Rows2Icon,
  Rows3Icon,
  Rows4Icon,
  SearchIcon,
} from "lucide-react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [density, setDensity] = useState<string>();
  const [globalFilter, setGlobalFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sorting, setSorting] = useState<SortingState>([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    globalFilterFn: "includesString",
    state: {
      columnFilters,
      globalFilter,
      sorting,
    },
  });

  return (
    <>
      <div className="flex items-center gap-2 pb-4">
        {/* Search input */}
        <Input
          placeholder="Search all columns..."
          value={globalFilter ?? ""}
          onChange={(event) => setGlobalFilter(String(event.target.value))}
          className="max-w-sm"
        />

        {/* Row density selector */}
        <Select value={density} onValueChange={setDensity}>
          <SelectTrigger aria-label="Density select">
            <SelectValue placeholder="Density" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Density</SelectLabel>
              <SelectItem value="compact">
                <div className="flex items-center gap-2">
                  <Rows4Icon className="size-4" /> Compact
                </div>
              </SelectItem>
              <SelectItem value="standard" className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <Rows3Icon className="size-4" /> Standard
                </div>
              </SelectItem>
              <SelectItem value="flexible" className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <Rows2Icon className="size-4" /> Flexible
                </div>
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* Column selector */}
        <DropdownMenu>
          <DropdownMenuTrigger className={"ml-auto"} asChild>
            <Button variant="outline" className="justify-between">
              <span className="flex items-center gap-2">
                <Columns3Icon /> Columns
              </span>{" "}
              <ChevronDownIcon className="ml-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <div className="relative">
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8"
                placeholder="Search"
                onKeyDown={(e) => e.stopPropagation()}
              />
              <SearchIcon className="absolute inset-y-0 left-2 my-auto size-4" />
            </div>
            <DropdownMenuSeparator />
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                if (
                  searchQuery &&
                  !column.id.toLowerCase().includes(searchQuery.toLowerCase())
                ) {
                  return null;
                }
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                    onSelect={(e) => e.preventDefault()}
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                table.resetColumnVisibility();
                setSearchQuery("");
              }}
            >
              <RefreshCcwIcon /> Reset
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="overflow-hidden rounded-md border">
        <Table
          className={cn({
            "[&_td]:py-px [&_th]:py-px": density === "compact",
            "[&_td]:py-1 [&_th]:py-1": density === "standard",
            "[&_td]:py-2 [&_th]:py-1": density === "flexible",
          })}
        >
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      aria-sort={
                        header.column.getIsSorted() === "asc"
                          ? "ascending"
                          : header.column.getIsSorted() === "desc"
                          ? "descending"
                          : "none"
                      }
                    >
                      {header.isPlaceholder ? null : (
                        <div
                          className={cn(
                            header.column.getCanSort() &&
                              "flex h-full cursor-pointer items-center justify-between gap-2 select-none"
                          )}
                          onClick={header.column.getToggleSortingHandler()}
                          onKeyDown={(e) => {
                            if (
                              header.column.getCanSort() &&
                              (e.key === "Enter" || e.key === " ")
                            ) {
                              e.preventDefault();
                              header.column.getToggleSortingHandler()?.(e);
                            }
                          }}
                          tabIndex={header.column.getCanSort() ? 0 : undefined}
                        >
                          <span className="truncate">
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                          </span>
                          {{
                            asc: (
                              <ChevronUpIcon
                                className="shrink-0 opacity-60"
                                size={16}
                                aria-hidden="true"
                              />
                            ),
                            desc: (
                              <ChevronDownIcon
                                className="shrink-0 opacity-60"
                                size={16}
                                aria-hidden="true"
                              />
                            ),
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                      )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className='odd:bg-muted/50 hover:bg-muted/50'
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="pt-2">
        <DataTablePagination table={table} />
      </div>
    </>
  );
}
