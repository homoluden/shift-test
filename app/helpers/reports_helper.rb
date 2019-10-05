module ReportsHelper
    # Set file_meta data
    def upd_file_meta()
        @report.file_meta = {}
        @report.order = 4
        if @report.file.attached?
            mimeType = @report.file.blob.content_type
            @report.file_meta = {
                mime_type: mimeType,
                original_filename: @report.file.blob.filename,
                size: @report.file.blob.byte_size,
            }
            @report.order = mime_to_order(mimeType)
        end
    end

    # Converts mime_type to order
    def mime_to_order(mime_type)
        case mime_type
        when 'application/pdf'
            0
        when 'image/tiff'
            1
        when 'image/png'
            2
        when 'text/plain'
            3
        else
            4
        end
    end
end
