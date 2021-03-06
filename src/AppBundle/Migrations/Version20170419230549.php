<?php

namespace AppBundle\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20170419230549 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE properties_types DROP FOREIGN KEY FK_C326967B3DA5256D');
        $this->addSql('ALTER TABLE properties_types ADD CONSTRAINT FK_C326967B3DA5256D FOREIGN KEY (image_id) REFERENCES media__media (id) ON DELETE CASCADE');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE properties_types DROP FOREIGN KEY FK_C326967B3DA5256D');
        $this->addSql('ALTER TABLE properties_types ADD CONSTRAINT FK_C326967B3DA5256D FOREIGN KEY (image_id) REFERENCES media__media (id)');
    }
}
