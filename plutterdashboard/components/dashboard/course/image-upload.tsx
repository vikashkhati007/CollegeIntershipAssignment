"use client"

import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import { ImageIcon, X } from 'lucide-react'
import Image from "next/image"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface ImageUploadProps {
  value: string
  onChange: (value: string) => void
  onRemove: () => void
  disabled?: boolean
}

export function ImageUpload({
  value,
  onChange,
  onRemove,
  disabled
}: ImageUploadProps) {
  const [isLoading, setIsLoading] = useState(false)

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      setIsLoading(true)
      
      try {
        const file = acceptedFiles[0]
        
        // In a real application, you would upload the file to your storage service
        // and get back a URL. For this example, we'll create a local object URL
        const objectUrl = URL.createObjectURL(file)
        onChange(objectUrl)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    },
    [onChange]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif']
    },
    maxFiles: 1,
    disabled: disabled || isLoading
  })

  return (
    <div>
      <div
        {...getRootProps()}
        className={cn(
          "relative flex cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed p-6 text-center transition-colors",
          isDragActive ? "border-primary/50 bg-primary/5" : "border-muted-foreground/25",
          disabled && "cursor-not-allowed opacity-60"
        )}
      >
        <input {...getInputProps()} />
        {value ? (
          <div className="relative aspect-video w-full max-w-[300px] mx-auto">
            <Image
              fill
              alt="Upload"
              src={value || "/placeholder.svg"}
              className="rounded-lg object-cover"
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-2">
            <ImageIcon className="h-8 w-8 text-muted-foreground" />
            <div className="text-xs text-muted-foreground">
              Drag & drop an image here, or click to select
            </div>
            <Button
              type="button"
              variant="secondary"
              size="sm"
              disabled={disabled || isLoading}
            >
              Choose File
            </Button>
          </div>
        )}
      </div>
      {value && (
        <div className="mt-2 flex items-center justify-end gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={onRemove}
            disabled={disabled || isLoading}
          >
            <X className="mr-2 h-4 w-4" />
            Remove Image
          </Button>
        </div>
      )}
    </div>
  )
}

