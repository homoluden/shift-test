class ReportsController < ApplicationController
  before_action :set_report, only: [:show, :file, :edit, :update, :destroy]

  # GET /reports
  # GET /reports.json
  def index
    page = params[:page]
    per_page = params[:per_page]
    @reports = Report.paginate(:page => page, :per_page => per_page)
  end

  # GET /reports/1
  # GET /reports/1.json
  def show
  end

  # GET /reports/1/file
  # GET /reports/1/file.json
  def file
    respond_to do |format|
      format.html { render :file, :layout => nil }
      format.json { render json: url_for(@report.file) }
    end
  end

  # GET /reports/new
  def new
    @report = Report.new
  end

  # GET /reports/1/edit
  def edit
  end

  # POST /reports
  # POST /reports.json
  def create
    @report = Report.new(report_params)
    helpers.upd_file_meta

    respond_to do |format|
      if @report.save
        format.html { redirect_to @report, notice: 'Report was successfully created.' }
        format.json { render :show, status: :created, location: @report }
      else
        format.html { render :new }
        format.json { render json: @report.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /reports/1
  # PATCH/PUT /reports/1.json
  def update
    helpers.upd_file_meta
    helpers.upd_file_url

    respond_to do |format|
      if @report.update(report_params)
        format.html { redirect_to @report, notice: 'Report was successfully updated.' }
        format.json { render :show, status: :ok, location: @report }
      else
        format.html { render :edit }
        format.json { render json: @report.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /reports/1
  # DELETE /reports/1.json
  def destroy
    @report.destroy
    respond_to do |format|
      format.html { redirect_to reports_url, notice: 'Report was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Inject report to View Bag
    def set_report
      @report = Report.find(params[:id])
    end

    # Parameters white list
    def report_params
      params.require(:report).permit(:title, :description, :file_meta, :file)
    end
end
