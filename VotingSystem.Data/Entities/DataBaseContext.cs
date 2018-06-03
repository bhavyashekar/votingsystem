namespace ProductManagement.Data.Entity
{
    using Microsoft.EntityFrameworkCore;
    using ProductManagement.Data.Entities;

    public partial class DataBaseContext : DbContext
    {
       // public virtual DbSet<Application> Application { get; set; }
        public virtual DbSet<Story> Story { get; set; }
        public virtual DbSet<Acceptance> Acceptance { get; set; }
        public virtual DbSet<Persona> Persona { get; set; }
        public virtual DbSet<TestCase> TestCase { get; set; }
        public virtual DbSet<TestSuite> TestSuite { get; set; }
        public virtual DbSet<FailedTest> FailedTest { get; set; }
        public virtual DbSet<TestSuiteCases> TestSuiteCases { get; set; }
        public virtual DbSet<Build> Build { get; set; }
        public virtual DbSet<BuildDefinition> BuildDefinition { get; set; }
        public virtual DbSet<Product> Product { get; set; }
        public virtual DbSet<Entities.Vote> Vote { get; set; }
        public virtual DbSet<Entities.VoteAudit> VoteAudit { get; set; }

        public DataBaseContext(DbContextOptions options) : base(options)
        { }

        public DataBaseContext()
        { }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>(entity =>
            {
                entity.ToTable("Product", "PDM");

                entity.Property(e => e.Name)
                    .IsRequired(true)
                    .HasColumnType("varchar(100)");

                entity.Property(e => e.Description)
                    .IsRequired(false)
                    .HasColumnType("varchar(100)");

               
            });

            //modelBuilder.Entity<Application>(entity =>
            //{
            //    entity.ToTable("Application", "PDM");

            //    entity.Property(e => e.Name)
            //        .IsRequired(true)
            //        .HasMaxLength(100);
            //    entity.Property(e => e.Icon)
            //        .IsRequired(false)
            //        .HasMaxLength(25);
            //});


            modelBuilder.Entity<Story>(entity =>
            {
                entity.ToTable("Story", "PDM");

                

                entity.Property(e => e.Wants)
                    .IsRequired(true)
                    .HasColumnType("varchar(150)");                

                entity.Property(e => e.SoThat)
                    .IsRequired(true)
                    .HasColumnType("varchar(150)");

                entity.Property(e => e.State)
                    .IsRequired(true)
                    .HasColumnType("char(1)");

                entity.Property(e => e.Description)
                    .IsRequired(false)
                    .HasColumnType("varchar(500)");

                entity.Property(e => e.Reference)
                   .IsRequired(true)
                   .HasColumnType("int");

                //entity.HasOne(d => d.Feature)
                //    .WithMany(p => p.Story)
                //    .HasForeignKey(d => d.FeatureId)
                //    .OnDelete(DeleteBehavior.Restrict)
                //    .HasConstraintName("FK_Story_Feature");
            });

            modelBuilder.Entity<Acceptance>(entity =>
            {
                entity.ToTable("Acceptance", "PDM");

                entity.Property(e => e.GivenCondition)
                    .IsRequired(true)
                    .HasColumnType("varchar(150)");

                entity.Property(e => e.WhenDone)
                    .IsRequired(true)
                    .HasColumnType("varchar(150)");

                entity.Property(e => e.ThenExpects)
                    .IsRequired(true)
                    .HasColumnType("varchar(150)");

                //entity.HasOne(d => d.Story)
                //    .WithMany(p => p.AcceptanceCriteria)
                //    .HasForeignKey(d => d.StoryId)
                //    .OnDelete(DeleteBehavior.Restrict)
                //    .HasConstraintName("FK_AcceptanceCriteria_Story");
            });

            modelBuilder.Entity<TestCase>(entity =>
            {
                entity.ToTable("TestCase", "PDM");

                entity.Property(e => e.Reference)
                    .IsRequired(true)
                    .HasColumnType("int");

                entity.Property(e => e.Name)
                    .IsRequired(true)
                    .HasColumnType("varchar(100)");

                entity.Property(e => e.Description)
                    .IsRequired(true)
                    .HasColumnType("varchar(100)");

                entity.Property(e => e.MethodName)
                   .IsRequired(false)
                   .HasColumnType("varchar(250)");

                //entity.HasOne(d => d.Acceptance)
                //    .WithMany(p => p.TestCase)
                //    .HasForeignKey(d => d.AcceptanceCriteriaId)
                //    .OnDelete(DeleteBehavior.Restrict)
                //    .HasConstraintName("FK_TestCase_AcceptanceCriteria");
            });

            modelBuilder.Entity<TestSuite>(entity =>
            {
                entity.ToTable("TestSuite", "PDM");

                entity.Property(e => e.Id)
                    .IsRequired(true)
                    .HasColumnType("int");

                entity.Property(e => e.Name)
                    .IsRequired(true)
                    .HasColumnType("varchar(100)");

                entity.Property(e => e.ProductId)
                    .IsRequired(true)
                    .HasColumnType("int");               

                entity.Property(e => e.IsSystem)
                    .IsRequired(true)
                    .HasColumnType("bit");

                entity.Property(e => e.TestType)
                    .IsRequired(false)
                    .HasColumnType("varchar(20)");

                //TODO - Add in Database 
               // entity.Ignore(e => e.TestType);

                entity.HasOne(d => d.ProductTable)
                .WithMany(p => p.TestSuite)
                   .HasForeignKey(d => d.ProductId)
                   .OnDelete(DeleteBehavior.Restrict)
                   .HasConstraintName("FK_TestSuite_Product");
            });

            modelBuilder.Entity<TestSuiteCases>(entity =>
            {
                entity.ToTable("TestSuiteCases", "PDM");

                entity.Property(e => e.suiteId)
                    .IsRequired(true)
                    .HasColumnType("int");

                entity.Property(e => e.caseId)
                    .IsRequired(true)
                    .HasColumnType("int");
                entity.HasKey(c => new { c.suiteId, c.caseId });

                entity.HasOne(d => d.TestCase)
           .WithMany(p => p.TestSuiteCases)
              .HasForeignKey(d => d.caseId)
              .OnDelete(DeleteBehavior.Restrict)
              .HasConstraintName("FK_TestSuiteCases_TestCase");

                entity.HasOne(d => d.TestSuite)
           .WithMany(p => p.TestSuiteCases)
              .HasForeignKey(d => d.suiteId)
              .OnDelete(DeleteBehavior.Restrict)
              .HasConstraintName("FK_TestSuiteCases_TestSuite");
            });

            modelBuilder.Entity<FailedTest>(entity =>
            {
                entity.ToTable("FailedTest", "PDM");

                entity.Property(e => e.BuildID)
                    .IsRequired(true)
                    .HasColumnType("int");

                entity.Property(e => e.Test)
                    .IsRequired(true)
                    .HasColumnType("varchar(100)");

                entity.Property(e => e.Reason)
                    .IsRequired(false)
                    .HasColumnType("varchar(100)");

                entity.HasKey(c => new { c.BuildID, c.Test });
            });

            modelBuilder.Entity<Build>(entity =>
            {
                entity.ToTable("Builds", "PDM");                            

                entity.Property(e => e.BuildId)
                                    .IsRequired(true)
                                    .HasColumnType("int");

                entity.Property(e => e.Reference)
                    .IsRequired(false)
                    .HasColumnType("int");

                entity.Property(e => e.IsGreen)
                    .IsRequired(false)
                    .HasColumnType("bool");

                entity.Property(e => e.FinishDate)
                    .IsRequired(false)
                    .HasColumnType("varchar(100)");

                //entity.Ignore(e => e.state);

                entity.Property(e => e.Status)
                    .IsRequired(false)
                    .HasColumnType("varchar(50)");


            });

            modelBuilder.Entity<Persona>(entity =>
            {
                entity.ToTable("Persona", "PDM");

                entity.Property(e => e.Name)
                    .IsRequired(true)
                    .HasColumnType("varchar(20)");

                entity.Property(e => e.PrimaryRole)
                    .IsRequired(false)
                    .HasColumnType("varchar(20)");

                entity.Property(e => e.Description)
                    .IsRequired(false)
                    .HasColumnType("varchar(500)");

                entity.Property(e => e.Image)
                    .IsRequired(false)
                    .HasColumnType("varchar(200)");

            });

            modelBuilder.Entity<Vote>(entity =>
            {
                entity.ToTable("Vote", "PDM");

                entity.Property(e => e.CandidateId)
                    .IsRequired(true)
                    .HasColumnType("int");

            });

            modelBuilder.Entity<VoteAudit>(entity =>
            {
                entity.ToTable("VoteAudit", "PDM");

                entity.Property(e => e.ElectionId)
                    .IsRequired(true)
                    .HasColumnType("int");

                entity.Property(e => e.AadhaarNumber)
                   .IsRequired(true)
                   .HasColumnType("int");

                entity.Property(e => e.VotedTime)
                  .IsRequired(true)
                  .HasColumnType("varchar(100)");

            });


            modelBuilder.Entity<BuildDefinition>(entity =>
            {
                entity.ToTable("BuildDefinition", "PDM");

                entity.Property(e => e.Name)
                    .IsRequired(true)
                    .HasColumnType("varchar(50)");

                entity.Property(e => e.Reference)
                    .IsRequired(true)
                    .HasColumnType("varchar(50)");                

            });
        }
    }
}
